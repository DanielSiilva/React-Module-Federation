import React from "react";
import Button from "container/Button";
import useStore from "container/hooks/useStore";
import { useStoreSelector } from "container/hooks/useStoreSelector";
import { Collapse } from "antd";

const { Panel } = Collapse;

export default function CartPage() {
  const { decrementCounter, incrementCounter } = useStore();
  const {
    counter: { value },
    product: { products },
  } = useStoreSelector((state) => state);

  const renderPanelContent = () => (
    <div className="flex flex-col w-full space-y-2">
      <Button
        onClick={() => incrementCounter()}
        label="Adicionar"
        buttonType="primary"
      />
      <Button
        onClick={() => decrementCounter()}
        label="Remover"
        buttonType="error"
      />
      <div className="pt-4">
        <p>Total de itens: {value}</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow-md w-full">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-lg font-semibold text-black mb-4">
            Pagina Remota 02
          </h1>
          <Collapse accordion className="w-full">
            <Panel header="Ver Carrinho" key="1" className="w-full">
              {renderPanelContent()}
            </Panel>
          </Collapse>
        </div>
      </div>
    </>
  );
}
