import React from 'react'
import Header from './Header'
import { useWishlist } from "react-use-wishlist";
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wishlist = () => {
    const { items } = useWishlist();
    const { removeWishlistItem } = useWishlist();
    const { setWishlistItems } = useWishlist();
    const { addWishlistItem } = useWishlist();
    const { addItem } = useCart();
    const { emptyWishlist } = useWishlist();

    const allAddToCart =()=>{
        for(let i=0;i<items.length;i++){
            addItem(items[i]);
        }
    }
    const toastAddToCart = () =>{
        toast.success("Successfully added to Cart!") 
    }
    const toastRemoveFromCart = () =>{
        toast.error("Successfully removed from Wishlist!") 
    }

  return (

    
    <div className='wishlistComponent'>
        <Header className='main' />

        {/* {items.map(item=>{
            return(
                <p>item.name</p>
            )
        })} */}

        {/* {items.map((item,i)=>{
            return(
                <p>{item.name}</p>
            )
        })} */}
        <div className="container">
      <div className="row g-4">
<div className="col-12 col-md-9 products-part">
        <div className="top-part">
          <p className="cart">Wishlist</p>
          <div className="deleteAll" onClick={emptyWishlist} >
            <p>
          <i className="fa-regular fa-trash-can"></i>
              Delete All
            </p>
          </div>
        </div>

        {items.length==0?<div style={{"width":"100%","display":"flex","justify-content":"center","align-items":"center"}}><img style={{"width":"100%"}} src="https://cdn.dribbble.com/users/461802/screenshots/4421003/emptycart.gif" alt="" /></div>:
      <>
        {items.map((item, i) => {
          return (
            <div key={item.id} className="mycard">
          <div className="row g-3">
            <div className="col-12 col-md-4 img-part">
              <img src={item.image} alt="" />
            </div>
            <div className="col-12 col-md-8 mt-4 text-part">
              <div className="top-text">
              <div className="heartProduct editProduct" onClick={() =>{
                 removeWishlistItem(item.id);
                 toastRemoveFromCart();
                 }} >
        <ToastContainer/>

              <i className="fa-solid fa-heart"></i>
              </div>
              <div className="addProduct editProduct" onClick={() =>{
                 addItem(item);
                 toastAddToCart();
                 }} >
        <ToastContainer/>

              <i className="fa-solid fa-cart-plus"></i>
              </div>
              <p className="name">{item.category.charAt(0).toUpperCase()+item.category.slice(1)}</p>
              <p className="desc mb-4">{item.name}</p>
              <p className="brand ">Brand : {item.brand.charAt(0).toUpperCase()+item.brand.slice(1)}</p>
              </div>

              <div className="product-price">
              
                {/* <p className="productPrice">{item.price.toFixed()*item.quantity} AZN</p> */}
                <p className="productPrice">{item.price} AZN</p>
              </div>
            </div>
          </div>
        </div>
          );
        })}
        </>
    }   

        {/* {items.length==0?<div style={{"width":"100%","display":"flex","justify-content":"center","align-items":"center"}}><img style={{"width":"100%"}} src="https://cdn.dribbble.com/users/461802/screenshots/4421003/emptycart.gif" alt="" /></div>:
        <>
        {items.map((item, i) => {
          return (
            <div key={item.id} className="mycard">
          <div className="row">
            <div className="col-12 col-md-4 img-part">
              <img src={item.image} alt="" />
            </div>
            <div className="col-12 col-md-8 text-part">
              <div className="top-text">
              <div className="deleteProduct" onClick={() => removeItem(item.id)} >
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
        } */}
      </div>


        <div className="col-12 col-md-3 d-none d-md-block all-price-part">
          <h4>Total Products: {items.length}</h4>
          <div className="text">
          <p className="price">
         {/* <span> TOTAL PRICE:</span> {cartTotal.toFixed()} AZN */}
          </p>
          <button className="btn btn-success" 
           onClick={()=>{
            allAddToCart();
            toastAddToCart();
          }}
           >Add to cart all</button>
        <ToastContainer/>

          </div>
        </div>
        <div className="col-12 col-md-3 d-block d-md-none all-price-part-phone">
          <div className="all">
          <div className="totalPrice">
          <p>Total Products: {items.length}</p>
          {/* <h4 className="price">{cartTotal.toFixed()} AZN</h4> */}
          </div>
          <button className="btn btn-success" 
          onClick={()=>{
            allAddToCart();
            toastAddToCart();
          }
          

          }>Add to cart all</button>
        <ToastContainer/>

          </div>
        </div>
      </div>
      </div>





    


    </div>
  )
}

export default Wishlist