import Image from "next/image"
import styles from "../styles/Dep.module.css"
import Cards from "./CardsDep"
export default function Sec_Dep() {
    return (
        <>
            <section className={styles.depimentos} data-aos="fade-up">
                <div className={styles.container}>
                    <h2 className={styles.texto_h2}>Nosso Depoimentos</h2>
                    <p className={styles.texto_p}>Leia o que os nossos Alunos falam de nós para o mundo</p>
                    <div class={styles.cards}>
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                </div>
            </section>

        </>
    )
}