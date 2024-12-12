 import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
export default function Navbar(){
    return(
        <>
        <nav className={styles.navgations}>
                        <Image
                            width={300}
                            height={300}
                            alt='logo'
                            src={`/Images/logoE.png`}
                        />
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