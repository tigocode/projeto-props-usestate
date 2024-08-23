import styles from './Topo.module.css';

export default function Topo(props) {
  function alterarState() {
    props.tipoAnimal === 'cachorro' ? props.setState('gato') : props.setState('cachorro');
  }

  return (
    <div className={styles.container_principal}>
      <header>
        <h1>Projeto Props + useState</h1>
        <p>Clique no botão para mudar os componentes abaixo</p>
        <button onClick={alterarState}>Mudar Animal</button>
      </header>
    </div>
  );
}
