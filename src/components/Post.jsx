import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';

export function Post(props) {
    const [comments, setComments] = useState(
        ['Post muito bacana, hein?!']
    )

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDataFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeNow = formatDistanceToNow(props.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment() {
        event.preventDefault();

        //acessando e mudando o valor da textArea de forma imperativa ou para trabalhar de forma imperativa
        //const newCommentText = event.target.comment.value
        //event.target.comment.value = '';
       
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={props.author.avatarUrl} alt="" />
                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
                </div>
                
                <time title={publishedDataFormatted} dataTime={props.publishedAt.toISOString()}>
                    {publishedDateRelativeNow}
                </time>

            </header>

            <div className={styles.content}>
              {props.content.map(line => {
                if (line.type === 'paragraph') {
                    return <p>{line.content}</p>
                }else if (line.type === 'link') {
                    return <p><a href="#">{line.content}</a></p>
                }
              })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name='comment'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
               {comments.map(comment => {
                    return <Comment content={comment} />
               })}
            </div>
        </article>
    )
}