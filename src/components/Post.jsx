import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/gabiguedes.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Gariela Guedes</strong>
                        <span>Matemática</span>
                    </div>
                </div>
                
                <time title="11 de Abril às 22:03h" dataTime="2023-05-11 22:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>
                    <p>Fala galeraa 👋</p>
                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                    <p><a href=""> 👉 jane.design/doctorcare</a></p>
                    <p>
                        <a href="">#novoprojeto </a>
                        <a href="">#nlw </a>
                        <a href="">#rocketseat</a> 
                    </p>
                </p>
            </div>
        </article>
    )
}