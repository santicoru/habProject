import React, { useState, useContext } from "react";
import { useHistory } from 'react-router';

const PackContext = React.createContext();

export function PackProvider({ children }) {
  const [pack, setPack] = useState(
    JSON.parse(localStorage.getItem("pack")) || []
  );

  const [code, setCode] = useState('');
  const history = useHistory();

  const addItemToPack = packItem => {
    let updatedPack = null;

    updatedPack = [{ ...packItem, quantity: 1 }, ...pack];

    setPack(updatedPack);
    localStorage.setItem("pack", JSON.stringify(updatedPack));
    history.push("/createPack");
  };

  const removeItem = packItem => {
    let updatedPack = null;


    updatedPack = pack.filter(item => packItem.productId !== item.productId);


    setPack(updatedPack);
    localStorage.setItem("pack", JSON.stringify(updatedPack));
  };

  const totalItems = pack.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = pack.reduce(
    (acc, item) => acc + 1 * parseInt(item.newPrice, 0),
    0
  );

  const resetPack = async () => {
    localStorage.removeItem("pack");
  };

  return (
    <PackContext.Provider
      value={{
        pack,
        addItemToPack,
        removeItem,
        totalItems,
        totalPrice,
        resetPack,
        code,
        setCode
      }}
    >
      {children}
    </PackContext.Provider>
  );
}

export function usePack() {
  const context = useContext(PackContext);
  return context;
}