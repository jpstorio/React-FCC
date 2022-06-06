import logo from "../logo.svg";
import styles from "../css/App.module.css";

function Header() {
  return (
    <div>
      <header>
        <nav className={styles.nav__}>
          <img className={styles.img} src={logo} alt="ReactLogo" />
          <ul className={styles.nav__items}>
            <li className={styles.nav__item__li}>Pricing</li>
            <li className={styles.nav__item__li}>About</li>
            <li className={styles.nav__item__li}>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
