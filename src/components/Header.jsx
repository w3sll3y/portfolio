import styles from '../../src/components/Header.module.css';

import igniteLogo from '../assets/coruja.png';

export function Header() {
  return (
    <div>
      <header className={styles.header}>
        <img src={igniteLogo} alt="Logo do Ignite" />
      </header>
    </div>
  );
}