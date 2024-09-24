import styles from '../styles/Sec_Conta.module.css'
export default function Sec_Contar(){
    return(
        <>
        
            <section className={styles.contar} id='conctatosid'>
            <div className={styles.div_textos} data-aos="fade-up">
                        <h6 className={styles.texto_h6}>Fale Connosco</h6>
                        <p className="mb-10">Estamos aqui para ajudar você em cada etapa da sua jornada de aprendizado de inglês! 
                            Se tiver alguma dúvida ou quiser saber mais sobre nossos cursos e actividades, 
                            envie-nos uma mensagem através do formulário abaixo (ou ao lado). Ficaremos felizes em responder suas perguntas e
                             orientá-lo sobre como a English Camp pode ajudar a alcançar seus objectivos. Estamos à sua disposição!</p>
                        <ul>

                            <li className="mb10">Para compartilhar sua, basta preencher o formulário a abaixo (ou ao lado)com os seu dados como  Nome, E-mail e o assunto em questão.
        
                                 </li>
                            <li></li>
                        </ul>
                    </div>
                      <form className={`${styles.formu} mt-11`} data-aos="fade-up" >
                        <input type="text" placeholder="Nome" id="nomeid" required/>
                        <input type="Email" placeholder="Email" id="emailid" required/>
                        <textarea placeholder="Informe-nos o que deseja saber" id="ideiaid" required></textarea>
                        <button type="submit" className={styles.btn_solid} id="btn_enviar">
                            <span id="LGButton">Enviar</span>
                        </button>
                    </form>
            </section>
        
        </>
    )

}