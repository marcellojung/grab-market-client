import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";
function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null); //처음 값을 null로
  useEffect(function () {
    axios //postman의 데이터를 가져온다.
      .get(`http://localhost:8080/products/${id}`)
      .then(function (result) {
        setProduct(result.data.product);
        //console.log(product);
        //console.log(result.data);
      })
      .catch(function (error) {
        console.error("에러발생 : ", error);
      });
  }, []);
  //console.log(product.name);
  //  return <h1>상품상세페이지 {id}</h1>;
  if (product === null) {
    return <h1>상품정보를 받고 있습니다...</h1>;
  } //처음이 null이기 때문에 비동기 호출임. 방어코드를 넣어줘야함.
  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createAt">2021년 12월 15일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}
export default ProductPage;
