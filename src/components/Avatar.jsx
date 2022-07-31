import styles from './Avatar.module.css';



export function Avatar({ hasBorder = true, src, author = true }) {
  return (
    <div className={author != true ? styles.avatarIsNone : ''}>
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src}
      />
    </div>
  )
}