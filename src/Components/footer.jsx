import styles from '../styles/Foote.module.css'
export default function Footer() {

    return (
        <>

            <footer className={`${styles.footer}`}>
                <div>
                    .
                </div>
                <div className={`${styles.texto_footer}`}>
                    English Camp <br />
                    &copy; 2024-Astronautas Sa<br />
                    <div className={`${styles.icons}`}>
                        <a href="#conctatosid">
                            <i class="bi bi-envelope sf"></i>
                        </a>
                        <a href="https://www.facebook.com/share/sUZy6Nz4UpNkVMQX/?mibextid=LQQJ4d" target='_blank'>
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/english_camp0?igsh=MmMwdW5lZHV2OWR1 " target='_blank'>
                            <i class="bi bi-instagram"></i>
                        </a>
                    </div>


                </div>

                <a href="#homeid">
                <i class="bi bi-arrow-up-short"></i>
                </a>
                

            </footer>
        </>
    )
}