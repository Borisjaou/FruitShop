import styles from './Header.module.scss';
import logo from '../images/logo.svg';
import shoppingCart from '../images/shoppingCart.svg';
import userIcon from '../images/user.svg';

function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <img className="logo" src={logo} alt='JamLogo' />
        <div className={styles.header__info}>
          <h3>Jam Fruits</h3>
          <p>Fruit Shop</p>
        </div>
      </div>
      <ul className={styles.header__right}>
        <li onClick={props.onClickCart}>
          <img className={styles.cart} src={shoppingCart} alt="shopping cart" />
          <span>1000 won</span>
        </li>
        <li>
          <img className={styles.user} src={userIcon} alt="user" />
        </li>
      </ul>
    </header >
  )
}
export default Header;