import styles from '../styles/Sec_Conta.module.css'
export default function Sec_Contar(){
    return(
        <>
        
            <section className={styles.contar} id='conctatosid'>
            <div className={styles.div_textos} data-aos="fade-up">
                        <h6 className={styles.texto_h6}>O Que Pode Contar</h6>
                        <p className="mb-10">Estou interessado em ouvir sobre qualquer projecto, grande ou pequeno. Seja uma ideia inovadora para um software desktop, 
                            um conceito para uma plataforma web revolucionária,Diga o que o 
                            mantém acordado à noite. 
                            Não importa quão complexa seja a sua ideia ou quão simples seja o seu problema, acredito que cada desafio é uma oportunidade.</p>
                        <ul>

                            <li className="mb10">Para compartilhar sua visão, basta preencher o formulário ao lado (ou abaixo) com os detalhes que você acredita serem importantes. 
                                Quanto mais informações você fornecer, mais precisamente
                                 poderei entender sua visão e elaborar soluções sob medida.</li>
                            <li></li>
                        </ul>
                    </div>
                      <form className={`${styles.formu} mt-11`} data-aos="fade-up" >
                        <input type="text" placeholder="Nome" id="nomeid" required/>
                        <input type="Email" placeholder="Email" id="emailid" required/>
                        <textarea placeholder="Seus dados" id="ideiaid" required></textarea>
                        <button type="submit" className={styles.btn_solid} id="btn_enviar">
                            <span id="LGButton">Enviar</span>
                        </button>
                    </form>
            </section>
        
        </>
    )

}