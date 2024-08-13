import styles from '../components/Header.module.css';
import rocketlogo from '../assets/rocketlogo.svg'
import todologo from '../assets/todo.svg'

export function Header(){
    return(
        <div>
            <header className={styles.menutopo}>
                <img className={styles.rocketlogo} src={rocketlogo} alt="" />
                <img className={styles.todologo} src={todologo} alt="" />
            </header>
        </div>
    )
}