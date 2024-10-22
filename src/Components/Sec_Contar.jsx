import styles from '../styles/Sec_Conta.module.css'
import { useState } from 'react'


export default function Sec_Contar() {
    const [nome, setNome] = useState()
    const [email, setemail] = useState()
    const [assunto, setassunto] = useState()
    const [botaoTexto, setBotaoTexto] = useState('Enviar');


 
    // para enviar o emial
    const enviarEmail = async (e) => {
        e.preventDefault()
        setBotaoTexto('Enviando...');
        const Dados = {
            email_clinent: email.value,
            nome: nome.value,
            ideia: assunto.value
        }
        const cabecalho = {
            method: 'post',
            body: JSON.stringify(Dados),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        }
        const servidor = 'https://api-email-production.up.railway.app';
        fetch(`${servidor}/send`, cabecalho)

            .then(res => {
                if (res.status == 200) {
                    setBotaoTexto('Enviando');
                    limparCampos();
                } else {
                    alert("Erro")
                    setBotaoTexto('enviar')
                }
            })
    }

    return (
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
                <form className={`${styles.formu} mt-11`} data-aos="fade-up" onSubmit={enviarEmail} >
                    <input type="text" placeholder="Nome"   id="nomeid" onChange={(e) => setNome(e.target)} required />
                    <input type="Email" placeholder="Email" id="emailid"  onChange={(e) => setemail(e.target)} required />
                    <textarea placeholder="Informe-nos o que deseja saber"  id="ideiaid" onChange={(e) => setassunto(e.target)} required></textarea>
                    <input type="submit" value={botaoTexto} className={styles.btn_solid} />
                </form>
            </section>

        </>
    )

}