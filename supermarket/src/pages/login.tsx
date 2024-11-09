import useAppContext from "@/context";
import { LoginType, loginSchema } from "@/types/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const router = useRouter();
    const { user, setUser } = useAppContext()

    useEffect(() => {
        if (user) {
            router.push('/home')
        }
        console.log('user: ', user);
    }, [user])

    const { register, handleSubmit, formState } = useForm<LoginType>({
        resolver: zodResolver(loginSchema),
        defaultValues: { email: "teste@test.com", senha: "123456" },
    });

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        setLoading(true);

        try {
            const res = await fetch(`/api/login`,
                {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: data.email,
                        senha: data.senha
                    })
                })
            console.log('res: ', res);
            if (!res.ok) {
                setErrorMessage(res.statusText + ", tente novamente!")
                setTimeout(() => setErrorMessage(""), 5000)
                return
            }
            const user = await res.json()
            setUser(user)
            console.log('res: ', res);
            router.push(`/home`);
            setLoading(false);
        } catch (error: any) {
            setLoading(false);
            setErrorMessage(error.message);
        }
    });

    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <form onSubmit={onSubmit} className="mx-auto min-w-[340px]">
                <div className="mb-4 w-full">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register("email", { required: true })}
                    />
                    {formState.errors.email && (
                        <span className="text-red-500">{`Email is required`}</span>
                    )}
                </div>
                <div className="mb-4 w-full">
                    <label htmlFor="senha" className="block text-gray-700 font-bold mb-2">
                        senha
                    </label>
                    <input
                        type="senha"
                        id="senha"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register("senha", { required: true })}
                    />
                    {formState.errors.senha && (
                        <span className="text-red-500">{`senha is required`}</span>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={!formState.isValid}
                    className={`${formState.isValid ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-500 cursor-not-allowed"
                        } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                >
                    Login
                </button>
            </form>
        </div>
    );
}
