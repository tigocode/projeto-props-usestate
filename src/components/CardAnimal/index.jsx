import Image from 'next/image';
import styles from './CardAnimal.module.css';

import imagemCachorro from "../../../public/cachorro.jpg";
import imagemGato from "../../../public/gato.jpg";

export default function CardAnimal(props) {
  return (
    <div className={styles.card_animal}>
      <Image
        src={props.tipoAnimal === 'cachorro' ? imagemCachorro : imagemGato} alt="ANIMAL"
      />
    </div>
  );
}
