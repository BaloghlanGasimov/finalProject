import React from "react";
import { useParams } from "react-router-dom";
import mydata from "../data/data";
import Header from "../components/Header";
import { useWishlist } from "react-use-wishlist";
import { useCart } from "react-use-cart";
// {alldata,id,category,image,name,price}
// const ShopDetailCard = ({alldata,id}) => {
const ShopDetailCard = () => {
  const { id } = useParams();
  const singleProduct = mydata.new_arrivals.find((p) => p.id == id);
  const { addItem } = useCart ();  
  const { setWishlistItems } = useWishlist();
  const { addWishlistItem } = useWishlist();
  return (
    <div className="shopDetailCard">
      <Header className="main" />

      <section className="head-part">

        <p>
          <a href="/">Home / </a>
          <a href="/shop">Shop / </a>
          {singleProduct.name}
        </p>
        
      </section>
      <div className="myCard">
        <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 img-part">
            <img src={singleProduct.image} alt="" />
          </div>
          <div className="col-12 col-md-6 text-part">
            <p className="name">{singleProduct.name}</p>
            <div className="detailAbout-card">
            <p className="sku"><span>SKU:</span> {singleProduct.sku}</p>

            {singleProduct.stock==0 ? <p className="outstock">OUT OF STOCK</p>: <p className="instock">IN STOCK</p>}
            
            <div className="share">
            <i className="fa-solid fa-share-nodes"></i>
            <p>SHARE</p>
            <div className="social-links">
              <div className="social-card copylink" onClick={()=>{navigator.clipboard.writeText(window.location.href)}}>Copy link</div>
              <div className="social-card whatsapp"><a href={`whatsapp://send?text=${window.location.href}`}><i className="fa-brands fa-whatsapp"></i></a></div>
              <div className="social-card instagram"><a href={`https://www.linkedin.com/shareArticle?mini=true&url=${navigator.share}`}><i className="fa-brands fa-linkedin"></i></a></div>
              <div className="social-card facebook"><a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}><i className="fa-brands fa-facebook"></i></a></div>
            </div>
            </div>
            
            </div>
            <div className="price">{singleProduct.price}$</div>
            <div className="material">
              <ul>
                <li>Outer: Leather 100%, Polyamide 100%</li>
                <li>Lining: Leather 100%</li>
                <li>Sole: Rubber 100%</li>
              </ul>
            </div>
            <button className="addtocart" onClick={() => addItem(singleProduct)}>
              + ADD TO CART
            </button>
            {/* <button className="heart" onClick={() => addWishlistItem(singleProduct.id)}> */}
            <button className="heart" >
            <i className="fa-regular fa-heart" ></i>
            </button>

            <p className="categories"><span>CATEGORIES:</span> {singleProduct.category}, {singleProduct.brand}</p>
            <p className="tags"><span>TAGS:</span> upstore, wordpress</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetailCard;
