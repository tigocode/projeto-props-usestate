'use client';
import { useState } from "react";
import estilos from "./page.module.css";

import CardAnimal from "@/components/CardAnimal";
import CardInformacoes from "@/components/CardInformacoes";
import Topo from "@/components/Topo";

export default function Home() {
  const [tipoDoComponenteCard, setTipoDoComponenteCard] = useState("cachorro");

  return (
    <div className={estilos.container_principal}>
      {/* componente Topo */}

      <Topo tipoAnimal={tipoDoComponenteCard} setState={setTipoDoComponenteCard} />

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
