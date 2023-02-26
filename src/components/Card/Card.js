import React from 'react';
import styles from './Card.module.scss';
import addButton from '../images/add.svg';
import addButtonChecked from '../images/added.svg';


function Card({ image, name, price, onAddItem }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const changeAddButton = isAdded ? addButtonChecked : addButton;

  const getAdded = () => {
    onAddItem({ image, name, price });
    setIsAdded(!isAdded);
  }


  return (
    <div className={styles.card}>
      <img className={styles.photo} src={image} alt={name} />
      <h5>{name}</h5>
      <div className={styles.info}>
        <div className={styles.cardprice}>
          <span>Price:</span>
          <b>{price} won</b>
        </div>
        <img className={styles.item} onClick={getAdded} src={changeAddButton} alt="add" />
      </div>
    </div>
  )
}

export default Card;

