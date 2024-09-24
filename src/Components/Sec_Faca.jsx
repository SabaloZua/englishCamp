import Image from "next/image"
import styles from "../styles/SecFacaSobre.module.css"
export default function SecFaca(){
    return(
        <>
          <section className={styles.sec_faca_sobre} id="sec3" data-aos="fade-right">
                    <div className={styles.cont} >
                        <div className={styles.sec_faca_sobre_img} >
                        <Image src={`/Images/Somos.jpg`}
                             alt="imagem somos" width={400} height={500}  />
                        </div>
                        <div className={styles.sec_faca_sobre_text}>
                            <h3>Faça mais com English Camp</h3>
                            <p>
                             Na English Camp, acreditamos que aprender inglês vai além da sala de aula. 
                             Oferecemos uma experiência completa que conecta o aprendizado com a prática em 
                             situações reais, 
                             ampliando as suas habilidades linguísticas. Com  workshops e
                             oportunidades de interação com falantes nativos, ajudamos você a colocar em prática tudo o
                             que aprende. Participe das nossas  aulas dinâmicas, 
                             e veja como o inglês pode abrir portas para novas
                              oportunidades. Na English Camp, 
                              você vai além do básico, você vive o inglês!
                            </p>
                        </div>
                       
                    </div>
                </section>

        </>
    )
}