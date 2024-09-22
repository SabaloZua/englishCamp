 import styles from '../styles/Navbar.module.css'

export default function Navbar(){
    return(
        <>
        <nav className={styles.navgations}>
                    <a href="#" className={styles.logo}>English Camp</a>
                    <ul className={styles.nav_menu} id='nav_menuid'>
                        <li className={styles.nav_iten}>
                            <a href="#">Home</a>
                        </li>
                        <li className={styles.nav_iten}>
                            <a href="#somosId">Sobre nos</a>
                        </li>
                        <li className={styles.nav_iten}>
                            <a href="#conctatosid">Contactos</a>
                        </li>
                    </ul>
                    <div className={styles.menu} id='menuid'>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </div>
                </nav>
        </>
    )
}