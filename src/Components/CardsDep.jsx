import Image from "next/image"
import styles from '../styles/CardsD.module.css'
export default function Cards(){
    return(
        <>
             <div className={styles.card_itens}>
                                <Image src={`/Images/somos.jpg`} alt="V" width={100} height={100}/>
                                <p className={styles.nome_user}>Texto12</p>
                                <p className={styles.dempoimento_user}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Ea quos facilis in saepe, 
                                hic laborum quae vero error placeat distinctio. Magni v
                                ero dicta officia labore.
                                </p>
                                <div className={styles.estrelas}>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                 
                                </div>
                            </div>
        </>
    )
}