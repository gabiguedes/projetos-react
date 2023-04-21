import { Header } from './components/Header'
import { Post } from './components/Post'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
        <Post 
          author="Gabi Guedes" 
          content="Programadora"
        />
          <Post 
          author="Hamilcar Aquino" 
          content="Professor de historia"
        />
        <Post 
          author="Luffytaro" 
          content="Reis dos piratas"
        />
        </main>
      </div>
    </div>
  )
}
