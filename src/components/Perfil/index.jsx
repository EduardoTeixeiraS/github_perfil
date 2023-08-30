import styles from './Perfil.module.css'

// Dando nome as propriedades que vão ser usadas na tag <Perfil />
// const Tag = ({propriedade1, propriedade2}) => {   }
const Perfil = ({nomeUsuario}) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>
                {nomeUsuario}
                </h1>
        </header>
    )
}

export default Perfil