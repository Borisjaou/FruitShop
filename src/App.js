
function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__left">
          <img className="logo" src="/images/logo.svg" />
          <div className="header__info">
            <h3>Jam Fruits</h3>
            <p>Fruit Shop</p>
          </div>
        </div>
        <ul className="header__right">
          <li>
            <img className="cart" src="/images/shoppingCart.svg" alt="shopping cart" />
            <span>1000 won</span>
          </li>
          <li>
            <img className="user" src="/images/user.svg" alt="user" />
          </li>
        </ul>
      </header >
      <div className="content">
        <h1>All you need is fruits</h1>
      </div>
      <div className="card-container">
        <div className="card">
          <img className="card-photo" src="/images/fruits/1.jpeg" alt="fruit" />
          <h5>Papaya</h5>
          <div className="card-info">
            <div className="card-info__price">
              <span>Price:</span>
              <b>38000 won</b>
            </div>
            <button className="add-button">
              <img className="add-item" src="/images/add.svg" alt="add" />
            </button>
          </div>
        </div>
        <div className="card">
          <img className="card-photo" src="/images/fruits/2.jpg" alt="fruit" />
          <h5>Papaya</h5>
          <div className="card-info">
            <div className="card-info__price">
              <span>Price:</span>
              <b>38000 won</b>
            </div>
            <button className="add-button">
              <img className="add-item" src="/images/add.svg" alt="add" />
            </button>
          </div>
        </div>
        <div className="card">
          <img className="card-photo" src="/images/fruits/3.jpg" alt="fruit" />
          <h5>Papaya</h5>
          <div className="card-info">
            <div className="card-info__price">
              <span>Price:</span>
              <b>38000 won</b>
            </div>
            <button className="add-button">
              <img className="add-item" src="/images/add.svg" alt="add" />
            </button>
          </div>
        </div>
        <div className="card">
          <img className="card-photo" src="/images/fruits/4.jpg" alt="fruit" />
          <h5>Not Papaya</h5>
          <div className="card-info">
            <div className="card-info__price">
              <span>Price:</span>
              <b>38000 won</b>
            </div>
            <button className="add-button">
              <img className="add-item" src="/images/add.svg" alt="add" />
            </button>
          </div>
        </div>
        <div className="card">
          <img className="card-photo" src="/images/fruits/5.jpg" alt="fruit" />
          <h5>Papaya</h5>
          <div className="card-info">
            <div className="card-info__price">
              <span>Price:</span>
              <b>38000 won</b>
            </div>
            <button className="add-button">
              <img className="add-item" src="/images/add.svg" alt="add" />
            </button>
          </div>
        </div>
      </div>

    </div >
  );
}
export default App;
