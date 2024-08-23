import styles from './CardInformacoes.module.css';

export default function CardInformacoes(props) {
  return(
    <div className={styles.card_informacao}>
      <h3>Imformação sobre o {props.tipoAnimal}</h3>
      <p>{props.informacaoAninal}</p>
    </div>
  );
}
