import React from "react";
import Header from "./Header";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {
  const notify = () => toast("Wow so easy!");
  const alertdi = () => alert('salamdida');

  const { items, updateItemQuantity, isEmpty, removeItem, cartTotal } = useCart();
  const { emptyCart } = useCart();
  const navigator = useNavigate();
  const buyAll =()=>{
    if(localStorage.getItem("login")==='Sign In'){
      // navigator('/login')
  // toast.success("Hello There!")
    toast.warning("You need Sign In buying this")

    }else{
      toast.success("Successfull!")
      emptyCart();

    }

    // Toastify({

    //   text: "This is a toast",
      
    //   duration: 3000
      
    //   }).showToast();

    // Toastify({
    //   text: "This is a toast",
    //   duration: 3000,
    //   destination: "https://github.com/apvarun/toastify-js",
    //   newWindow: true,
    //   close: true,
    //   gravity: "right", // `top` or `bottom`
    //   position: "right", // `left`, `center` or `right`
    //   stopOnFocus: true, // Prevents dismissing of toast on hover
    //   style: {
    //     background: "linear-gradient(to right, #00b09b, #96c93d)",
    //   },
    // }).showToast();


  //   toast.success('Success Notification !', {
  //     position: toast.POSITION.TOP_RIGHT
  // });
    

    
    
  }
  
  return (
    <div className="cartComponent"> 
      <Header className="main" />
      <div className="container">
      <div className="row g-4">
<div className="col-12 col-md-9 products-part">
        <div className="top-part">
          <p className="cart">Cart</p>
          <div className="deleteAll" onClick={emptyCart} >
            <p>
          <i class="fa-regular fa-trash-can"></i>
              Delete All
            </p>
          </div>
        </div>

        {/* {items.length==0 ? <div></div>:<div>} */}
        {items.length==0?<div style={{"width":"100%","display":"flex","justify-content":"center","align-items":"center"}}><img style={{"width":"100%"}} src="https://cdn.dribbble.com/users/461802/screenshots/4421003/emptycart.gif" alt="" /></div>:
        <>
        {items.map((item, i) => {
          return (
            <div key={item.id} className="mycard">
          <div className="row">
            <div className="col-12 col-md-4 img-part">
              <img src={item.image} alt="" />
            </div>
            <div className="col-12 col-md-8 mt-4 text-part">
              <div className="top-text">
              <div className="deleteProduct editProduct" onClick={() => removeItem(item.id)} >
              <i className="fa-regular fa-trash-can"></i>
              </div>
              <p className="name">{item.category.charAt(0).toUpperCase()+item.category.slice(1)}</p>
              <p className="desc mb-4">{item.name}</p>
              <p className="brand ">Brand : {item.brand.charAt(0).toUpperCase()+item.brand.slice(1)}</p>
              </div>

              <div className="product-price">
              <div className="button-part">
                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} >-</button>
                <span>{item.quantity}</span>
                <button onClick={()=>{updateItemQuantity(item.id,item.quantity + 1)}} >+</button>
              </div>
                <p className="productPrice">{item.price.toFixed()*item.quantity} AZN</p>
              </div>
            </div>
          </div>
        </div>
          );
        })}
        </>
        }
      </div>


        <div className="col-12 col-md-3 d-none d-md-block all-price-part">
          <h4>Products in Card</h4>
          <div className="text">
          <p className="price">
         <span> TOTAL PRICE:</span> {cartTotal.toFixed()} AZN
          </p>
          {/* <ToastContainer> */}
          
          <button className="btn btn-success" onClick={buyAll}  >Buy Now</button>
          <ToastContainer/>
          </div>
        </div>
        <div className="col-12 col-md-3 d-block d-md-none all-price-part-phone">
          <div className="all">
          <div className="totalPrice">
          <p>Total Price</p>
          <h4 className="price">{cartTotal.toFixed()} AZN</h4>
          </div>
          <button className="btn btn-success" onClick={buyAll}>Buy Now</button>
          </div>
        </div>
      </div>
      </div>

      {/* <button onClick={notify}>YOXLUYRAMMM</button> */}
      
      
      
    </div>
  );
};

export default Cart;
