import Button from "container/Button";
import useStore from "container/hooks/useStore";
import { useStoreSelector } from "container/hooks/useStoreSelector";
import React, { useEffect, useState } from "react";

export default function CartPage() {
  const [data, setData] = useState([]);

  const {
    decrementCounter,
    incrementByAmountCounter,
    incrementCounter,
    getProductList,
  } = useStore();
  const {
    counter: { value },
    product: { products },
  } = useStoreSelector((state) => state);

  console.log("Value", value);

  return (
    <>
      <div className="p-2 space-y-2 border">
        <label className="text-black">Pagina Remota - Aplicacao 02</label>
        <p>Contator : {value}</p>
      </div>
    </>
  );
}
