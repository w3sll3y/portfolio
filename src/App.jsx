import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css'

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Wesley Fernandes"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, exercitationem deserunt repellat quae aliquam accusantium, et modi veritatis aliquid, dicta perferendis labore. Vitae tenetur perferendis nostrum eos sunt? Ullam, quidem?"
          />
        </main>
      </div>
    </div>
  )
}

export default App