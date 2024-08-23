'use client';
import { useState } from "react";
import estilos from "./page.module.css";

import CardAnimal from "@/components/CardAnimal";
import CardInformacoes from "@/components/CardInformacoes";

export default function Home() {
  const [tipoDoComponenteCard, setTipoDoComponenteCard] = useState("cachorro");

  const alterarState = () => {
    if (tipoDoComponenteCard === "cachorro") {
      setTipoDoComponenteCard("gato");
    } else {
      setTipoDoComponenteCard("cachorro");
    }
  }

  return (
    <div className={estilos.container_principal}>
      {/* componente Topo */}
      <header>
        <h1>Projeto Props + useState</h1>
        <p>Clique no botão para mudar os componentes abaixo</p>
        <button onClick={alterarState}>Mudar Animal</button>
      </header>

      {/* Compomente CardAnimal */}
      <main>
        <CardAnimal
          tipoAnimal={tipoDoComponenteCard}
        />

        {/* Componente CardInformacoes */}
        <CardInformacoes
          tipoAnimal={tipoDoComponenteCard}
        />
      </main>
    </div>
  );
}
