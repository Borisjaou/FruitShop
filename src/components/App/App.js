import styles from './App.module.scss';
import Header from "../Header/Header";
import Card from "../Card/Card";
import { fruitsArr } from "../Utils/Utils"
console.log(fruitsArr)

function App() {
  const addItem = () => {
    console.log('lol')
  }
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <h1>All you need is fruits</h1>
      </div>
      <div className={styles.cardContainer}>
        {fruitsArr.map((i) =>
          <Card
            name={i.name}
            price={i.price}
            image={i.image}
            onClick={addItem}
          />
        )}
      </div>

    </div >
  );
}
export default App;
