import styles from './Card.module.scss';
import addButton from '../images/add.svg'


function Card(props) {

  return (
    <div className={styles.card}>
      <img className={styles.photo} src={props.image} alt={props.name} />
      <h5>{props.name}</h5>
      <div className={styles.info}>
        <div className=
          {styles.cardprice
          }>
          <span>Price:</span>
          <b>{props.price} won</b>
        </div>
        <button className={styles.button} onClick={props.onClick}>
          <img className={styles.item} src={addButton} alt="add" />
        </button>
      </div>
    </div>
  )
}

export default Card;