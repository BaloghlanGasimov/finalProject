import React, { useContext, useEffect, useState } from 'react'
import home_hero1 from '../assets/img/home-hero1.jpg'
import home_hero2 from '../assets/img/home-hero2.jpg'
import home_hero3 from '../assets/img/home-hero3.jpg'
import { LinkContainer } from 'react-router-bootstrap'
import Header from '../components/Header'
import NewArrivalsCard from '../singlecards/NewArrivalsCard'
import athletickickbg from '../assets/img/sneaker-deal-bg.jpg'
import athletickickimg from '../assets/img/sneaker-deal-product.png'

import { LangDataContext } from '../context/LangDataContext';
import { LangContext } from '../context/LangContext';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
import { ProductContext } from '../context/ProductContext'
import { ThemeContext } from '../context/ThemeContext'


const Home = () => {
  const [category,setCategory]=useState('athletic-kicks')
  const [mydata] = useContext(ProductContext)
  const products = mydata.new_arrivals.filter(p =>p.category ==category)
  // console.log(products);

  const [mode,setMode] = useContext(ThemeContext);
  const [langData,setLangData] = useContext(LangDataContext);
  const [lang,setLang] = useContext(LangContext);
  const [mylang,setMylang] = useState(lang=="az"? langData.az: langData.en);

  useEffect(()=>{

    // if(lang=="az"){
    if(localStorage.getItem("langMode")=="az"){
      setMylang(langData.az)
  }else{
    setMylang(langData.en)
  }
  },lang)


  return (
    <div className='homeComponent'>

<section className='hero-part'>
      <Header/>
      <swiper-container className="mySwiper" pagination="true" pagination-dynamic-bullets="true">
        <swiper-slide key="1">
          <img src={home_hero1} alt="home-hero1 pic" />
          <div className="text-part">
            <h2>{mylang.home.herofirst} <br /> <span>{mylang.home.sneaker}</span></h2>
            <div className="button-parts">
            <LinkContainer to='/shop'>
              <button>{mylang.home.shopMen} <i className="fa-solid fa-arrow-right"></i></button>
            </LinkContainer>
            <LinkContainer to='/shop'>
              <button>{mylang.home.shopWomen} <i className="fa-solid fa-arrow-right"></i></button>
            </LinkContainer>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide key="2">
        <img src={home_hero2} alt="home-hero2 pic" />
        <div className="text-part">
            <h2>X2020 <br /> <span>{mylang.home.trend}</span></h2>
            <div className="button-parts">
            <LinkContainer to='/shop'>
              <button>{mylang.home.shopMen} <i className="fa-solid fa-arrow-right"></i></button>
            </LinkContainer>
            <LinkContainer to='/shop'>
              <button>{mylang.home.shopWomen} <i className="fa-solid fa-arrow-right"></i></button>
            </LinkContainer>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide key="3">
        <img src={home_hero3} alt="home-hero3 pic" />
        <div className="text-part">
            <h2>{mylang.home.sportnew}<br /> <span>{mylang.home.sport}</span></h2>
            <div className="button-parts">
            <LinkContainer to='/shop'>
              <button>{mylang.home.shopMen} <i className="fa-solid fa-arrow-right"></i></button>
            </LinkContainer>
            <LinkContainer to='/shop'>
              <button>{mylang.home.shopWomen} <i className="fa-solid fa-arrow-right"></i></button>
            </LinkContainer>
            </div>
          </div>
        </swiper-slide>
        
      </swiper-container> 
      </section> 
      
    {/* sale-products start

    <section className='sale-products'>
          <div className="container">
            <div className="row g-4">
              <div className="col-12 col-md-4">
                <div className="sale-prod prod-image1"></div>
              </div>
              <div className="col-12 col-md-4">
              <div className="sale-prod prod-image2"></div>


              </div>
              <div className="col-12 col-md-4">
              <div className="sale-prod prod-image3"></div>
              </div>
            </div>
          </div>
      </section>
      {/* sale-products end */}
      {/* home-information start */}
      <section className="home-information">
       <div className="container center-home-info">
        <div className="row g-3">
            <div className="col-12 col-sm-6 col-md-3">
                <div className="my-info-card">
                    <i className="fa-solid fa-truck-fast"></i>
                    <p>{mylang.home.shipping}</p>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
                <div className="my-info-card">
                    <i className="fa-solid fa-rotate-left"></i>
                    <p>{mylang.home.moneyReturn}</p>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
                <div className="my-info-card">
                    <i className="fa-solid fa-phone"></i>
                    <p>{mylang.home.support}</p>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
                
        <div className="my-info-card">
            <i className="fa-solid fa-shield"></i>
            <p>{mylang.home.quality}</p>
        </div>
            </div>
        </div>
        
       
        
       </div>
    </section>
      {/* home-information end  */}

      {/* sale-info start  */}
      <section className='sale-info'>
        <div className="container sale-info-con">
        <p>{mylang.home.cashback}</p>
        </div>
      </section>
      {/* sale-info end*/}

      {/* new-arrivals start */}


      <section className="new-arrivals">
        <p className="headtext"><span>{mylang.home.new}</span> {mylang.home.arrivals}</p>
        <div className="categories-buttons">
          <button onClick={()=>{setCategory("athletic-kicks")}}>{mylang.home.athleticKicks2}</button>
          <button onClick={()=>{setCategory("plimsoll")}}>Plimsoll</button>
          <button onClick={()=>{setCategory("slipon")}}>Slip-On</button>
          <button onClick={()=>{setCategory("hightop")}}>High Top</button>
        </div>
        <div>
        
        
        </div>
      <div className="product-parts">
      <div className="container">
      <Swiper
     
     breakpoints={{
      10: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
     }}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      
    >
        {products.map((item)=>{
          return(
          <SwiperSlide key={item.id}>
              <NewArrivalsCard key={item.id} alldata={item} id={item.id} image={item.image} name={item.name} price={item.price}/>
            </SwiperSlide>
            )
          })}
    </Swiper>
      </div>
         
      </div>
      </section>
      {/* new-arrivals end */}


    <section className="athletic-kicks">
      {/* <img src={athletickickbg} alt="" /> */}
      <div className="row">
        <div className="col-12 col-lg-5 ">
          <div className="text-part">
            <h2 className='headname'>{mylang.home.athleticKicks}</h2>
            <h1>{mylang.home.sale}</h1>
            <h3>{mylang.home.discount50}</h3>
            <div className="time">
              <div className="days">
                <p className='numb'>553</p>
                <p className='text'>{mylang.home.day}</p>
              </div>
              <div className="hours">
                <p className='numb'>19</p>
                <p className='text'>{mylang.home.hour}</p>
              </div>
              <div className="mins">
                <p className='numb'>25</p>
                <p className='text'>{mylang.home.min}</p>
              </div>
              <div className="secs">
                <p className='numb'>50</p>
                <p className='text'>{mylang.home.sec}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-7 img-part">
          <img src={athletickickimg} width={550} alt="" />
        </div>
      </div>

    </section>

    <section className="sale-products">
        <p className="headtext"><span>{mylang.home.saleProd}</span>  {mylang.home.products}</p>
      <div className="product-parts">
      <div className="container">
      <Swiper
     
     breakpoints={{
      10: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
     }}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      
    >
        {mydata.new_arrivals.slice(0,7).map((item)=>{
          return(
          <SwiperSlide>
              <NewArrivalsCard key={item.id} id={item.id} image={item.image} name={item.name} price={item.price}/>
            </SwiperSlide>
            )
          })}
    </Swiper>
      </div>
         
      </div>
      </section>

    <section className="two-products">
      <div className="container">
      <div className="row g-4">
        <div className="col-12 col-md-6 prod-about firstprod">
          <div className="text-part">
            <p>{mylang.home.starting150}</p>
            <h3>{mylang.home.ultraRange}</h3>
            <a href="#">{mylang.home.shopnow}<i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        <div className="col-12 col-md-6 prod-about secondprod">
        <div className="text-part">
            <p>{mylang.home.starting100}</p>
            <h3>{mylang.home.discount50}</h3>
            <a href="#">{mylang.home.shopnow} <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
      </div>
    </section>


    <div className="hurry-up">
      <div className="container hurry-up-con">
          <div className="text-part">
            <h2>{mylang.home.hurry}</h2>
            <p className='discount'>{mylang.home.newsDiscount25}</p>
            <p className="sign">{mylang.home.signUp}</p>
            <div className="email">
              <input type="text" placeholder='Your email here...' />
              <button><i className="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
      </div>

      
    </div>


      </div>
      
  )
}

export default Home