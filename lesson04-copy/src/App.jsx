import { useState } from "react";
import "./App.css";
import CardItem from "./components/Carditem";
import ItemDetail from "./components/ItemDetail";

function App() {
  const listProductArray = [
    {
      id: 1,
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/black-sport-watch.png",
      name: "Black Sports Watch",
      price: 799,
    },
    {
      id: 2,
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/black-watch-768x768.png",
      name: "Black Watch",
      price: 599,
    },
    {
      id: 3,
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/watch-1-768x768.png",
      name: "Chrome Watch",
      price: 399,
    },
    {
      id: 4,
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/watch-2-768x768.png",
      name: "Classic Watch",
      price: 899,
    },
    {
      id: 5,
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/custom-watch-768x768.png",
      name: "Custom Watch",
      price: 199,
    },
    {
      id: 6,
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/gold-watch-768x768.png",
      name: "Gold Watch",
      price: 699,
    },
    {
      id: 7,
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/navy-blue-watch-768x768.png",
      name: "Navy Blue Watch",
      price: 499,
    },
    {
      id: 8,
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/pink-watch-768x768.png",
      name: "Pink Watch",
      price: 299,
    },
  ];

  const [cartList, setCartList] = useState([]);
  const [favList, setFavList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleImageClick(product) {
    setSelectedProduct(product);
    setIsModalVisible(true);
  }

  function handleAddToCart(productItem) {
    const productExisted = cartList.find((item) => item.id == productItem.id);
    if (productExisted) {
      productExisted.quantity += 1;
      setCartList([...cartList]);
    } else {
      setCartList([...cartList, { ...productItem, quantity: 1 }]);
    }
  }

  function handleAddToFavCart(productItem) {
    const productExisted = favList.find((item) => item.id == productItem.id);
    if (productExisted) {
      setFavList([...favList]);
    } else {
      setFavList([...favList, { ...productItem, quantity: 1 }]);
    }
  }

  function handlePlus(id) {
    const updatedCartList = cartList.map((item) => {
      if (item.id == id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartList(updatedCartList);
  }

  function handleMinus(id) {
    const updatedCartList = cartList.map((item) => {
      if (item.id == id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartList(updatedCartList);
  }

  function handleDelete(id) {
    const updatedCartList = cartList.filter((item) => item.id !== id);
    setCartList(updatedCartList);

    const updatedFavCartList = favList.filter((item) => item.id !== id);
    setFavList(updatedFavCartList);
  }

  function totalPrice() {
    return cartList.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  function totalItemInCart() {
    return cartList.reduce((total, item) => total + item.quantity, 0);
  }

  function showCarttab() {
    const body = document.querySelector("body");
    body.classList.toggle("showCart");
  }

  function showFavCart() {
    const body = document.querySelector("body");
    body.classList.toggle("showFavCart");
  }

  return (
    <body>
      <div className="list-product">
        <div className="header-content container">
          <button className="btn-icon-favourite" onClick={showFavCart}>
            <span>
              <i class="fa fa-heart"></i>
              <p className="favourite-shopping-count">{favList.length}</p>
            </span>
          </button>
          <h3 className="list-product-title">List Product</h3>
          <button className="btn-shoppingcart" onClick={showCarttab}>
            <span>
              <i className="fa fa-shopping-cart"></i>
              <p className="shopping-count">{totalItemInCart()}</p>
            </span>
          </button>
        </div>

        <div className="list-product-lists container">
          {listProductArray.length > 0 &&
            listProductArray.map((item) => (
              <CardItem
                id={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                handleAddToCart={handleAddToCart}
                handleAddToFavCart={handleAddToFavCart}
                handleImageClick={handleImageClick}
              />
            ))}
        </div>
      </div>

      {isModalVisible && selectedProduct && (
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button className="product-detail-icon-heart">
                  <i class="fa fa-heart"></i>
                </button>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <ItemDetail
                  img={selectedProduct.img}
                  name={selectedProduct.name}
                  price={selectedProduct.price}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="cart-tab">
        <div className="cart-header">
          <i
            className="fa fa-long-arrow-alt-right cart-close"
            onClick={showCarttab}
          ></i>
          <h2>Your Cart</h2>
        </div>
        <div className="list-cart-body">
          {cartList.map((element) => {
            return (
              <div className="list-cart-item">
                <img src={element.img} />
                <div className="cart-item-detail">
                  <h3>{element.name}</h3>
                  <h5>${element.price}</h5>
                  <div className="list-cart-amount">
                    <i
                      className="fa fa-minus"
                      onClick={() => handleMinus(element.id)}
                    />
                    <span className="qty">{element.quantity}</span>
                    <i
                      className="fa fa-plus"
                      onClick={() => handlePlus(element.id)}
                    />
                    <span className="list-cart-price">
                      ${element.price * element.quantity}
                    </span>
                    <button onClick={() => handleDelete(element.id)}>
                      <i className="fa fa-trash-alt" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="cart-footer">
          <div className="cart-footer-total">
            <strong>Total</strong>
            <span className="cart-total">$ {totalPrice()}</span>
          </div>

          <button className="button-clear" onClick={() => setCartList([])}>
            CLEAR CART
          </button>
          <button className="button-checkOut">CHECKOUT</button>
        </div>
      </div>

      <div className="cart-favourite">
        <div className="cart-favourite-header">
          <h2>Your Favourite Cart</h2>
          <i
            className="fa fa-long-arrow-alt-left cart-close-favourite"
            onClick={showFavCart}
          ></i>
        </div>
        <div className="list-cart-favourite-body">
          {favList.map((element) => {
            return (
              <div className="list-cart-item">
                <img src={element.img} />
                <div className="cart-item-detail">
                  <h3>{element.name}</h3>
                  <h5>${element.price}</h5>
                  <div className="list-cart-amount">
                    <button onClick={() => handleDelete(element.id)}>
                      <i className="fa fa-trash-alt" />
                    </button>
                    <button
                      className="button-checkOut"
                      onClick={() => handleAddToCart(element)}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="cart-footer">
          <button className="button-clear" onClick={() => setFavList([])}>
            CLEAR CART
          </button>
        </div>
      </div>
    </body>
  );
}

export default App;
