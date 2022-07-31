import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment(props) {
  const hasImage = props.srcImage;

  return (
    <div className={styles.comment}>
      <Avatar author={props.author} hasBorder={false} src={hasImage ? hasImage : 'https://github.com/w3sll3y.png'} alt="" />

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