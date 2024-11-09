import { Client } from "@/types/client";
import parseCpfCnpj from './../../../utils/parse/CpfCnpj';
import Link from "next/link";
import { FiEdit3, FiMaximize2, FiX } from "react-icons/fi";

interface Props {
  data: Client[];
  handleRemove: (data: any) => void;
}

function Tbody({ data, handleRemove }: Props) {
  const tdStyle = "border-b p-2 whitespace-nowrap text-center text-sm font-medium w-96 "
  return (
    <tbody className="border-b border-gray-400 w-full">
      {data.map((item: Client) => (
        <tr key={item.cpfCnpj + item.id}>
          <td className={`${tdStyle} + text-start`}>
            {item.nome} {item.sobrenome}
          </td>
          <td className={tdStyle}>
            {parseCpfCnpj(item.cpfCnpj)}
          </td>
          <td className={tdStyle}>
            {item.dataRegistro}
          </td>
          <td className={tdStyle}>
            {item.status ? "Ativo" : "Inativo"}
          </td>
          <td className={tdStyle}>
            <Link
              href={`clients/edit/${item.id}`}
              className="text-indigo-600 hover:invert"
            >
              <FiEdit3 size={24} className="mx-auto" />
            </Link>
          </td>
          <td className={tdStyle}>
            <button
              className="text-red-600 hover:text-red-900 hover:invert"
              onClick={() => handleRemove(item)}
            >
              <FiX size={24} className="mx-auto" />
            </button>
          </td>
          <td className={tdStyle}>
            <Link
              href={`clients/view/${item.id}`}
              className="text-lime-600 hover:invert"
            >
              <FiMaximize2 size={24} className="mx-auto" />
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default Tbody;
