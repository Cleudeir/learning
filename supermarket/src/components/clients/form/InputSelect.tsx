import { Client } from "@/types/client";
import { Endereco } from "@/types/endereco";
import { FC } from "react";
import { UseFormReturn } from "react-hook-form";

interface Props {
  label: string;
  name: keyof Omit<Client, 'endereco'> | (`endereco.${keyof Endereco}`);
  form: UseFormReturn<Client>;
  options: {id:any, value:string | number}[];
}

const InputSelect: FC<Props> = ({ label, name, form, options }) => {
  return (
    <div className="my-0 w-full">
      <label htmlFor={name} className="block font-medium text-gray-700">
        {label}
      </label>
      <select
        id={name}
        {...form.register(name)}
        className="block  w-[calc(100%)] py-2 px-3 text-gray-700 border rounded-lg shadow-sm focus:border-blue-500 focus:outline-none focus:shadow-outline-blue form-select"
      >
        {options.map(({id, value}) => (
          <option key={id} value={id}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
