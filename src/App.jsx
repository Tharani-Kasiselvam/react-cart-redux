import products_list from './data/products.json'

import './App.css'
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";
import { useSelector, useDispatch } from 'react-redux';
import { add, minus, selectCartCount } from './features/cartCounterSlice'

const App = () => {
  const product_data = products_list.products

  const prod_details = product_data[4]
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();

  const removeCountHandler = () => {
    //Restricted to select less than one quantity
    if (cartCount > 1)
      dispatch(minus(1))
    else
      dispatch(reset())
  }

  const calcTotalPrice = () => {
    let totalPrice = prod_details.price * cartCount
    return totalPrice
  }

  return (
    <div className="main">
      <div className="row" >
        <div className="col-md-6" style={{ marginTop: "30px" }}>
          <img className="card-img-top" src="../prod_1.png" alt="cart_img"
            style={{ height: "250px", width: "200px" }} />
        </div>
        <div className="col" style={{ marginTop: "30px" }}>
          <h3>{prod_details.title}</h3>
          <h6>Description:</h6>
          <p>{prod_details.description}</p>
          <h6>Brand:</h6><p>{prod_details.brand}</p>
          <h6>Rating:</h6><p>{prod_details.rating}</p>
          <p><small><b>Category: </b>{prod_details.category}</small></p>
        </div>
      </div>
      <hr className="line" />
      <div className="row">
        <div className="col">
          <button className="rmvCount" onClick={removeCountHandler}><HiMinus /></button>
          <button className="quantity">{cartCount}</button>
          <button className="addCount" onClick={() => dispatch(add(1))}><HiPlus /></button>
        </div>
        <div className="col" style={{ textAlign: "right" }}><b>Price:</b> ₹{prod_details.price}</div>
      </div>
      <hr className="line" />
      <div className="row">
        <div className="col">SUBTOTAL:</div>
        <div className="col" style={{ textAlign: "right" }}>₹{prod_details.price} x {cartCount}</div>
      </div>
      <hr className="line" />
      <div className="row">
        <div className="col"><b>TOTAL PRICE:</b></div>
        <div className="col" style={{ textAlign: "right" }}><b>₹{calcTotalPrice()}</b></div>
      </div>
      <button className="btn btn-primary text-white" style={{ width: "180px", margin: "20px" }}>Proceed to Buy</button>
      <br /> <br />
    </div>
  )
}

export default App