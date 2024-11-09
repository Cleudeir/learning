import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
interface contextProps {
    user: { token: string } | null;
    setUser: Dispatch<SetStateAction<string | null>>
}
const AppContext = createContext<contextProps>({
    user: null,
    setUser: () => null
});



export function AppWrapper({ children }: { children: any }) {
    const [user, setUser] = useState<string | null>(null);
    return (
        <AppContext.Provider
            value={{
                user,
                setUser,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export default function useAppContext() {
    return useContext(AppContext)
}