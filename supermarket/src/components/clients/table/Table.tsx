import { Client } from "../../../types/client";
import Thead from "./Thead";
import Tbody from "./Tbody";
import useIndex from "./useIndex";
import Link from "next/link";

interface Props {
  data: Client[];
}

const Table = ({ data }: Props) => {
  const { currentData, search, handleFilterChange, handleRemove, currentPage, setCurrentPage, pageNumbers } = useIndex(data)
  return (
    <div className="">
      <div className="flex gap-2 flex-col sm:flex-row justify-start items-center">
        <Link
          href="/clients/new"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 first:h-10 rounded whitespace-nowrap"
        >
          New Client
        </Link>
        <input
          type="search"
          className="text-center w-full h-10 border-2"
          placeholder="Busque por Nome ou CPF"
          value={search}
          onChange={(e) => handleFilterChange(e)}
        />
      </div>
      <div className="w-full">
        {currentData && (
          <table className="block overflow-x-auto "  >
            <Thead />
            <Tbody data={currentData} handleRemove={handleRemove} />
          </table>
        )}
      </div>
      <div className="flex justify-center my-4 text-xl font-medium">
        {pageNumbers && pageNumbers.map((number) => (
          <Link
            href="#"
            key={number}
            className={`mx-2 ${currentPage === number ? "text-blue-700 underline" : "text-blue-400"
              }`}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Table;
