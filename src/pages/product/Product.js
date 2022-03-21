import React from 'react';
import './product.css';
import {Link} from 'react-router-dom';
import Chart from "../../components/chart/Chart";
import { productData } from  "../../DummyData";

function Product() {
  return (
    <div className="product">
        <div claasName="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newProduct">
            <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} dataKey ="Sales" title="Sales Performance" />
            </div>
            <div className="productTopRight">
              <div className="productInfoTop">
                <img src="https://images.pexels.com/photos/7054529/pexels-photo-7054529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                <span className="productName">pple Airpods</span>
              </div>
              <div className="productInfoBottom">
                <div className="productInfoItem">
                  <span className="productInfoKey">id:</span>
                  <span className="productInfoValue">123</span>
                </div>
              </div>
            </div>
        </div>
        <div className="productBottom">

        </div>
    </div>
  )
}

export default P