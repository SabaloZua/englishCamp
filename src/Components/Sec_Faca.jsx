import Image from "next/image"
import styles from "../styles/SecFacaSobre.module.css"
export default function SecFaca(){
    return(
        <>
          <section className={styles.sec_faca_sobre} id="sec3" data-aos="fade-right">
                    <div className={styles.cont} >
                        <div className={styles.sec_faca_sobre_img} >
                        <Image src={`/Images/somos.jpg`}
                             alt="imagem rapaz" width={400} height={400} quality={80}  />
                        </div>
                        <div className={styles.sec_faca_sobre_text}>
                            <h3>Faça mais com English Camp</h3>
                            <p>
                                Olá, pessoal!😃É um prazer tê-los conosco nessa jornada de aprendizado de inglês.
                             Estamos esperando que todos os integrantes se juntem ao 
                            grupo, para então passarmos as informações importantes e começarmos a nossa caminhada juntos
                            </p>
                        </div>
                       
                    </div>
                </section>

        </>
    )
}