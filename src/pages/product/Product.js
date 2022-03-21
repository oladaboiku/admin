import React from 'react';
import './product.css';
import {Link} from 'react-router-dom';
import Chart from "../../components/chart/Chart";

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
                <Chart/>
            </div>
            <div className="productTopRight"></div>
        </div>
        <div className="productb">

        </div>
    </div>
  )
}

export default Product