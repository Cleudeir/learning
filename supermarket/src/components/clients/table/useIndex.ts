import useAppContext from "@/context";
import { Client } from "@/types/client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface returnProps {
    currentData: Client[] | [] | null;
    search: string;
    handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleRemove: (item: Client) => Promise<void>;
    currentPage: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
    pageNumbers: number[] | null;
}
function useIndex(data: any[] | null): returnProps {
    const { user } = useAppContext()
    const [currentData, setCurrentData] = useState<Client[] | [] | null>(null);
    const [search, setSearch] = useState<string>("");
    function handleFilterChange(
        event: React.ChangeEvent<HTMLInputElement>
    ): void {
        const { value } = event.target;
        if (!data) {
            return;
        }
        const result: any = data.filter(
            (x: Client) =>
                x.nome.toLowerCase().includes(value.toLowerCase()) ||
                x.sobrenome.toLowerCase().includes(value.toLowerCase()) ||
                x.cpfCnpj.includes(value) ||
                String(x.id).includes(value.toLowerCase())
        );
        console.log(result, data, value);
        if (result)
            setCurrentData(result);
        setSearch(value);
    }
    const handleRemove = async (item: Client) => {
        console.log('item: ', item);
        const result = confirm(
            `Tem certeza que deseja remover o cliente ${item.nome}?`
        );
        if (result) {
            if (item.id) {
                try {
                    const res = await fetch(`/api/cliente/deletar/${item.id}`, {
                        method: "DELETE",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + user?.token
                        },
                        body: JSON.stringify(item)
                    }
                    )                    
                    if (!res.ok) {
                        alert(res.statusText)
                        return
                    }
                    const _data = data?.filter((x: any) => x.id !== item.id)                   
                    if (_data) {
                        setCurrentData(_data)
                    }
                } catch (error: any) {
                    alert(error.message)
                }
            }
        }
    };
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageNumbers, setPageNumbers] = useState<number[] | null>(null);
    const dataPerPage = 30;
    useEffect(() => {
        const indexOfLast = currentPage * dataPerPage;
        const indexOfFirst = indexOfLast - dataPerPage;
        if (data) {
            setCurrentData(data.slice(indexOfFirst, indexOfLast));
            const numPages = Math.ceil(data.length / dataPerPage);
            const pages = []
            for (let i = 1; i <= numPages; i++) {
                pages.push(i);
            }
            setPageNumbers(pages)
            console.log("pages", pages), data.slice(indexOfFirst, indexOfLast);
            console.log("currentPage", currentPage)
        }
    }, [currentPage])
    return ({ currentData, search, handleFilterChange, handleRemove, currentPage, setCurrentPage, pageNumbers });
}
export default useIndex;