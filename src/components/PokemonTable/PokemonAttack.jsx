import styles from './PokemonAttack.module.scss'

const PokemonAttack = ({ attack }) => (
    <span className={styles.attackStyle}>{attack}</span>
)

export default PokemonAttack
