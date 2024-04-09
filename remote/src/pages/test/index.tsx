import Button from "container/Button";
import useStore from "container/hooks/useStore";
import { useStoreSelector } from "container/hooks/useStoreSelector";
import React, { useEffect, useState } from "react";

export default function TestPage() {
  const [data, setData] = useState([]);

  const { decrementCounter, incrementCounter, getProductList } = useStore();
  const {
    counter: { value },
    product: { products },
  } = useStoreSelector((state) => state);

  console.log("Value", value);

  // function getData() {
  //   const myHeaders = new Headers();
  //   myHeaders.append("Accept", "application/json");
  //   myHeaders.append("Content-Type", "application/json");
  //   myHeaders.append(
  //     "Authorization",
  //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaGFzaCI6IldlZCBTZXAgMjIgMjAyMSAxMDowNTowMyBHTVQtMDMwMCIsImRiIjoiSlRCUUstR0pKVDctNFlGTDUtUFdDWloiLCJhcHAiOiJydW50YXNrIiwiaWF0IjoxNzEyMzM0OTYwLCJleHAiOjE3MTI5Mzk3NjB9.PG3gpluuMilJrBlje-cQONUGeEoBJG9yALRrqXzp90A"
  //   );

  //   const raw = JSON.stringify({
  //     pagination: {
  //       size: 1,
  //     },
  //   });

  //   const requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch(
  //     "https://api.devel.runtask.com/api/local_users/filter",
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);
  //       if (result.success && Array.isArray(result.data)) {
  //         setData(result.data);
  //       } else {
  //         console.error("Data is not an array:", result);
  //         setData([]);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setData([]);
  //     });
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="p-2 space-y-2 border">
      <label className="text-black">Pagina Remota - Aplicacao 01</label>
      <p>Contator : {value}</p>
      <section className="flex flex-row gap-x-4">
        <Button
          label="Decrement"
          buttonType={"error"}
          onClick={decrementCounter}
        />
        <Button
          label="Increment"
          buttonType={"primary"}
          onClick={incrementCounter}
        />
        <Button
          label="Get All Product"
          buttonType={"secondary"}
          onClick={getProductList}
        />
      </section>
      <section className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            className="flex flex-col items-center justify-center text-center text-black border-2 border-gray-300 rounded-lg gap-y-4"
            key={product.id}
          >
            <div>{product.brand}</div>
            <img
              src={product.images[0]}
              className="object-contain w-24 h-24"
              alt={product.brand}
            />
            <em>{product.price} $</em>
          </div>
        ))}
      </section>
    </div>
  );
}
