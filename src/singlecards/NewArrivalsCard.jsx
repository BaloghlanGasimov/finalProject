import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { LinkContainer } from 'react-router-bootstrap';
import { useWishlist } from "react-use-wishlist";
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewArrivalsCard = ({alldata,id,category,image,name,price}) => {
  const { addItem } = useCart();
  const { setWishlistItems } = useWishlist();
  const { addWishlistItem,getWishlistItem,removeWishlistItem } = useWishlist();
  const { getItem } = useCart();
  const cartnotify = () =>{ 
        toast.success("Succesfully added to Cart")
      };
  const wishlistnotify = () =>{
    if(getWishlistItem(alldata.id)!==undefined){
      toast.info("Succesfully deleted from Wishlist")
    }else{
      toast.success("Succesfully added to Wishlist")
    }
    };
  const wishlistAdding = ()=>{
    if(getWishlistItem(alldata.id)!==undefined){
      removeWishlistItem(alldata.id);
    }else{
      addWishlistItem(alldata);
    }
  }
  return (
    <>
     {/* <LinkContainer to={`${id}`}> */}

    {/* <SwiperSlide> */}

     <div className="myproduct-card">
          <div className="image-part">
            <img src={image} alt="hiddenimg" />
            <img src={image} alt="shownimg" />
          </div>
          <div className="text-part">
            <p>{name}</p>
            <h6>${price}</h6>
          </div>
          <div className="hover-links">
            <a href="#" className="circle-link" 
            onClick={() =>{
              cartnotify();
              addItem(alldata);
            }}
              ><i className="fa-solid fa-cart-shopping"></i></a>

            <a href="#" className="circle-link"
            onClick={() =>{
              wishlistAdding();
              wishlistnotify();
           }}
            // ><i className="fa-solid fa-heart"></i></a>
             >{getWishlistItem(id)===undefined? <i className="fa-regular fa-heart"></i> : <i className="fa-solid fa-heart text-danger"></i> }</a>

{/* <i className="fa-solid fa-heart"></i> */}
            <LinkContainer to={`/${id}`}>
            <a className="circle-link"><i className="fa-solid fa-right-long"></i></a>
            </LinkContainer>
          </div>

        </div>

      
    </>
  )
}

export default NewArrivalsCard