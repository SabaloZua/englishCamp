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
                             Somos uma comunidade dedicada a ajudar você a atingir seu potencial máximo no aprendizado da língua inglesa. 
                             Nosso objectivo é transformar o aprendizado de inglês em uma jornada agradável e 
                             eficaz, proporcionando um ambiente acolhedor e interativo. Aqui, acreditamos que 
                             aprender uma nova língua é mais do que memorizar palavras e regras gramaticais é 
                             sobre confiança, comunicação real e crescimento pessoal.
                            </p>
                        </div>
                        <div class={sytles.sec_faca_sobre_img} >
                            <Image src={`/Images/rapaz.jpg`}
                             alt="imagem rapaz" width={500} height={500}   />
                        </div>
                    </div>
                </section>
        </>
    )
}