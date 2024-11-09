import React, {createContext, useEffect, useState} from 'react';

export const Context = createContext(null);

export default function AppContextProvider({children}) {
  const [user, setUser] = useState(false);
  const [obras, setObras] = useState(false);
  const [usuarios, setUsuarios] = useState(false);
  const [frentes, setFrentes] = useState(false);

  return (
    <Context.Provider value={{
      user, setUser,
      obras, setObras,
      usuarios, setUsuarios,
      frentes, setFrentes,
    }}>
      {children}
    </Context.Provider>
  );
}
