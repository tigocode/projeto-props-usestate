'use client';
import { useState } from "react";
import Image from "next/image";
import estilos from "./page.module.css";
import imagemCachorro from "/public/cachorro.jpg";
import imagemGato from "/public/gato.jpg";

import CardAnimal from "@/components/CardAnimal";
import CardInformacoes from "@/components/CardInformacoes";

export default function Home() {
  let imagemAnimal = "";
  let informacaoAnimal = "";
  let tipoAnimal = "Cachorro";

  const [tipoDoComponenteCard, setTipoDoComponenteCard] = useState("cachorro");

  const alterarState = () => {
    if (tipoDoComponenteCard === "cachorro") {
      setTipoDoComponenteCard("gato");
    } else {
      setTipoDoComponenteCard("cachorro");
    }
  };

  if (tipoDoComponenteCard === "cachorro") {
    imagemAnimal = imagemCachorro;
    informacaoAnimal = "É um mamífero carnívoro da família dos canídeos.";
    tipoAnimal = "Cachorro";
  } else {
    imagemAnimal = imagemGato;
    informacaoAnimal = "É um mamífero carnívoro da família dos felídeos.";
    tipoAnimal = "Gato";
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
          imagemAnimal={imagemAnimal}
        />

        {/* Componente CardInformacoes */}
        <CardInformacoes
          tipoAnimal={tipoAnimal}
          informacaoAninal={informacaoAnimal}
        />
      </main>
    </div>
  );
}
