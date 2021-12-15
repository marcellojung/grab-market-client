import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";
//import {BrowserRouter} from 'react-router-dom';
function MainPage() {
  const [products, setproducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://8ece7723-fe3b-4957-be17-25f7da96a4fc.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setproducts(products);
      })
      .catch(function (error) {
        console.error("에러발생 : ", error);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map(function (product, index) {
            return (
              <div className="product-card">
                <Link classsName="product-link" to={`/products/${index}`}>
                  <div>
                    <img className="product-img" src={product.imageURL} />
                  </div>
                  <div>
                    <div className="product-contents">
                      <span className="product-name">{product.name}</span>
                      <span className="product-price">{product.price}원</span>
                      <div className="product-seller">
                        <img
                          className="product-avatar"
                          src="images/icons/avatar.png"
                        />
                        <span>{product.seller}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}
export default MainPage;
