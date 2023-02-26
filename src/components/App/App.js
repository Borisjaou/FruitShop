import React from 'react';
import styles from './App.module.scss';
import Header from "../Header/Header";
import Card from "../Card/Card";
import SideMenu from "../SideMenu/SideMenu";
/* import { fruitsArr } from "../Utils/Utils" */

function App() {
  const [cardOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([])

  React.useEffect(() => {
    fetch('https://63f5f0e79daf59d1ad7e8178.mockapi.io/fruits/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      })
  }, [])

  const addItem = (obj) => {
    setCartItems((prev) => [...prev, obj])

  }

  return (
    <div className={styles.wrapper}>
      {cardOpened && <SideMenu items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className={styles.content}>
        <h1>All you need is fruits</h1>
      </div>
      <div className={styles.cardContainer}>
        {items.map((i) =>
          <Card
            name={i.name}
            price={i.price}
            image={i.image}
            onAddItem={(obj) => addItem(obj)}
          />
        )}
      </div>

    </div >
  );
}
export default App;
