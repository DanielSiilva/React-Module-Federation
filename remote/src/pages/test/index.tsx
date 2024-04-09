import Button from "container/Button";
import useStore from "container/hooks/useStore";
import { useStoreSelector } from "container/hooks/useStoreSelector";
import React, { useEffect } from "react";

export default function TestPage() {
  // const [data, setData] = useState([]);

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

  useEffect(() => {
    getProductList();
  }, [getProductList]);

  return (
    <div className="p-2 space-y-2 border">
      <h1 className="text-black text-center">Pagina Remota 01</h1>
      <p>Quantidade de Produtos : {products.length}</p>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <div
            className="flex flex-col items-center justify-center text-center text-black border-2 border-gray-300 rounded-lg p-4 gap-y-4 shadow-lg hover:shadow-xl transition-shadow"
            key={product.id}
          >
            <div className="font-bold text-lg">{product.brand}</div>
            <img
              src={product.images[0]}
              className="object-contain w-24 h-24 mx-auto"
              alt={product.brand}
            />
            <div className="font-medium text-gray-800">{product.price} $</div>
            <div className="flex flex-row gap-x-2">
              <Button
                label="Adicionar"
                buttonType={"primary"}
                onClick={incrementCounter}
              />
              <Button
                label="Remover"
                buttonType={"error"}
                onClick={decrementCounter}
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
