import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment(props) {
  const hasImage = props.srcImage;

  return (
    <div className={styles.comment}>
      <Avatar author={props.author} hasBorder={false} src={hasImage ? hasImage : 'https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'} alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{props.title}</strong>
              <time>{props.time}</time>
            </div>
          </header>

          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}