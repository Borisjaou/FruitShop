import closeButton from '../images/closeButton.svg';
import deleteItem from '../images/deleteItem.svg'
import styles from './SideMenu.module.scss';
import fruit from '../images/fruits/3.jpg'


function SideMenu({ onClose, items, onRemove }) {

  return (
    <div className={styles.sideMenu}>
      <div className={styles.basket}>
        <h2 className={styles.header}>
          Корзина <img onClick={onClose} className={styles.closeBasket} src={closeButton} alt='close basket' />
        </h2>

        <div className={styles.itemContainer}>
          <div className={styles.items}>
            {items.map((obj) => (
              <div key={obj.id} className={styles.card}>
                {/*                 <div
                  style={{ backgroundImage: `url(${obj.image})` }}
                  className="itemPhoto"></div> */}
                <img className={styles.itemPhoto} src={obj.image} alt={obj.name} />

                <div className={styles.cardInfo}>
                  <p className={styles.name}>{obj.name}</p>
                  <b>{obj.price} won</b>
                </div>
                <img
                  onClick={() => onRemove(obj.id)}
                  className={styles.deleteButton}
                  src={deleteItem}
                  alt='delete button'
                />
              </div>
            ))}
          </div>

          {/* <div className={styles.card}>
            <div className={styles.itemPhoto} />
            <div className={styles.cardInfo}>
              <p>Some Fruit</p>
              <b>12000 won</b>
            </div>
            <img className={styles.deleteButton} src={deleteItem} alt='delete button' />
          </div> */}

          <div className={styles.cartTotalBlock}>
            <ul>
              <li>
                <span>Total:</span>
                <div></div>
                <b> won</b>
              </li>
              <li>
                <span>Tax 13%:</span>
                <div></div>
                <b> won</b>
              </li>
            </ul>
            <button disabled={true} onClick={false} className={styles.payButton}>
              Check out
            </button>
          </div>



        </div>
      </div>
    </div>
  );

}
export default SideMenu;