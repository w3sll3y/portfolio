import styles from './Sidebar.module.css';
import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover}
        src="https://media.licdn.com/dms/image/D4D16AQGoULsLpXbqQQ/profile-displaybackgroundimage-shrink_350_1400/0/1697847689230?e=1703116800&v=beta&t=qxMlL0ZnMav5m6zmgzHyLFiY8lmJy_TipAJvgNnAYvo"
      />

      <div className={styles.profile}>
        <Avatar
          src="https://github.com/w3sll3y.png"
        />

        <strong>Wesley Fernandes</strong>
        <span>Software Engineer</span>
        <a
          style={{ color: 'inherit', fontStyle: 'italic' }}
          href='https://www.credly.com/badges/6930c355-ded7-445b-a34d-1811f7f7cca2/public_url'
          target='blank'
        >
          <span>CLF-C01</span>
        </a>
        <a
          style={{ textDecoration: 'none', color: 'inherit', marginTop: ' 5px' }}
          href='https://www.credly.com/badges/6930c355-ded7-445b-a34d-1811f7f7cca2/public_url'
          target='blank'
        >
          <span>
            <img
              width={50}
              height={50}
              hasBorder={false}
              src="https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
            />
          </span>
        </a>
      </div>

      <footer>
        <a
          href="https://www.linkedin.com/in/wesley-fernandess/"
          target="blank"
        >
          <LinkedinLogo size={20} />
          Linkedin
        </a>
        <a
          href="https://github.com/w3sll3y"
          target="blank"
        >
          <GithubLogo size={20} />
          Github
        </a>
        <a
          href="https://www.instagram.com/weslley_all/"
          target="blank"
        >
          <InstagramLogo size={20} />
          Instagram
        </a>
      </footer>
    </aside>
  )
}