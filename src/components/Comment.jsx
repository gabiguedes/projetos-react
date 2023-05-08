import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(props) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/gabiguedes.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriela Guedes</strong>
                            <time title="11 de Abril às 22:03h" dataTime="2023-05-11 22:00">Cerca de 2h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{props.content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}