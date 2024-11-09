function Thead() {
  return (
    <thead className="border-b border-gray-400 mb-6">
      <tr>     
        <th className="p-2">Nome completo</th>
        <th className="p-2">CPF/CNPJ</th>
        <th className="p-2 whitespace-normal" >Registro</th>
        <th className="p-2">Status</th>
        <th className="p-2">Editar</th>
        <th className="p-2">Remover</th>
        <th className="p-2">Visualizar</th>
      </tr>
    </thead>
  );
}

export default Thead;
