import  Image from 'next/image';
import styles from './CardAnimal.module.css';

export default function CardAnimal(props) {
  return(
    <div className={styles.card_animal}>
      <Image src={props.imagemAnimal} alt="ANIMAL" />
    </div>
  );
}
