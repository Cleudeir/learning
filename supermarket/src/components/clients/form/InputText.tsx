import React, { FC } from "react";
import { UseFormReturn } from "react-hook-form";
import { Client } from "@/types/client";
import { Endereco } from "@/types/endereco";
import ErrorMessage from "@/components/common/ErrorMessage";

interface InputTextProps {
  label: string;
  name: keyof Omit<Client, "endereco"> | `endereco.${keyof Endereco}`;
  form: UseFormReturn<Client>;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

const InputText: FC<InputTextProps> = ({
  label,
  name,
  form,
  placeholder,
  required = true,
  type = "text",
}: InputTextProps): JSX.Element => {
  const { errors }: { errors: any } = form.formState;
  function ErrorShow() {
    const [atribute, subAtribute] = name.split(".");
    if (errors && errors[atribute] && errors[atribute][subAtribute]) {
      return (
        <ErrorMessage
          messageError={String(errors[atribute][subAtribute].message)}
        />
      );
    } else if (errors[name]) {
      return <ErrorMessage messageError={String(errors[name].message)} />;
    } else {
      return <></>;
    }
  }
  return (
    <div className="form-group w-full">
      <label
        htmlFor={`${name}-input`}
        className="block text-gray-700 font-bold mb-2"
      >
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>
      <input
        {...form.register(name, { required })}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          errors && errors[name] ? "border-red-500" : ""
        }`}
      />
      <ErrorShow />
    </div>
  );
};

export default InputText;
