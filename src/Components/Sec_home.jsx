import styles from '../styles/secHome.module.css'
export default function SecHome(){
    return(
    <>
     <section className={styles.sec_home} id='homeid' >
                    <div className={styles.home_texto}>
                        <h4 className={styles.texto_h4}>Bem vindo a English Camp</h4>
                        <h1 className={styles.texto_h1}>English Camp</h1>
                        <p>Speak with confidence learn with passion</p>
                        <a href="#" className={styles.btn_home}>Fale Connosco</a>
                    </div>
    </section>
    </>
    )
}