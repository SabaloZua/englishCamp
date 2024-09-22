import Image from "next/image"
import sytles from "../styles/SecFacaSobre.module.css"

export default function SecFaca(){
    return(
        <>
         <section class={sytles.sec_faca_sobre} id="somosId" data-aos="fade-left">
                    <div class={sytles.cont}  >
                        <div class={sytles.sec_faca_sobre_text} >
                            <h3>Quem Nós Somos </h3>
                            <p>
                                Olá, pessoal!😃É um prazer tê-los conosco nessa jornada de aprendizado de inglês.
                             Estamos esperando que todos os integrantes se juntem ao 
                            grupo, para então passarmos as informações importantes e começarmos a nossa caminhada juntos
                            </p>
                        </div>
                        <div class={sytles.sec_faca_sobre_img} >
                            <Image src={`/Images/rapaz.jpg`}
                             alt="imagem rapaz" width={400} height={400} quality={80}  />
                        </div>
                    </div>
                </section>
        </>
    )
}