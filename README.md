# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




-------------------------------------------------------------------------
-------------------------------------------------------------------------
-------------------------------------------------------------------------
import React from 'react'
import home_hero1 from '../assets/img/home-hero1.jpg'
import home_hero2 from '../assets/img/home-hero2.jpg'
import home_hero3 from '../assets/img/home-hero3.jpg'
import { LinkContainer } from 'react-router-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Header from '../components/Header'
import mydata from '../data/data'
import NewArrivalsCard from '../SingleCards/NewArrivalsCard'

const Home = () => {
  return (
    <div className='home'>

      <section className='hero-part'>
      <Header/>
      <swiper-container className="mySwiper" pagination="true" pagination-dynamic-bullets="true">
        <swiper-slide>
          <img src={home_hero1} alt="home-hero1 pic" />
          <div className="text-part">
            <h2>30% OFF <br /> <span>SNEAKER</span></h2>
            <div className="button-parts">
            <LinkContainer to='/shop/men'>
              <button>SHOP MEN <i class="fa-solid fa-arrow-right"></i></button>
            </LinkContainer>
            <LinkContainer to='/shop/women'>
              <button>SHOP WOMEN <i class="fa-solid fa-arrow-right"></i></button>
            </LinkContainer>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
        <img src={home_hero2} alt="home-hero2 pic" />
        <div className="text-part">
            <h2>X2020 <br /> <span>TRENDY</span></h2>
            <div className="button-parts">
            <LinkContainer to='/shop/men'>
              <button>SHOP MEN <i class="fa-solid fa-arrow-right"></i></button>
            </LinkContainer>
            <LinkContainer to='/shop/women'>
              <button>SHOP WOMEN <i class="fa-solid fa-arrow-right"></i></button>
            </LinkContainer>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
        <img src={home_hero3} alt="home-hero3 pic" />
        <div className="text-part">
            <h2>NEW FOR <br /> <span>SPORT</span></h2>
            <div className="button-parts">
            <LinkContainer to='/shop/men'>
              <button>SHOP MEN <i class="fa-solid fa-arrow-right"></i></button>
            </LinkContainer>
            <LinkContainer to='/shop/women'>
              <button>SHOP WOMEN <i class="fa-solid fa-arrow-right"></i></button>
            </LinkContainer>
            </div>
          </div>
        </swiper-slide>
        
      </swiper-container> 
      </section>
      
    {/* sale-products start */}

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
                    <p>FREE SHIPPING WORLD WIDE</p>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
                <div className="my-info-card">
                    <i className="fa-solid fa-rotate-left"></i>
                    <p>30 DAYS MONEY RETURNS</p>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
                <div className="my-info-card">
                    <i className="fa-solid fa-phone"></i>
                    <p>24/7 CUSTOMER SUPPORT</p>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
                
        <div className="my-info-card">
            <i className="fa-solid fa-shield"></i>
            <p>COMMITMENT TO QUALITY</p>
        </div>
            </div>
        </div>
        
       
        
       </div>
    </section>
      {/* home-information end  */}

      {/* sale-info start  */}
      <section className='sale-info'>
        <div className="container sale-info-con">
        <p>2% Cashback on order placed  using Enzy Pay</p>
        </div>
      </section>
      {/* sale-info end*/}

      {/* new-arrivals start */}

      <section className="new-arrivals">
        <p className="headtext"><span>NEW</span> ARRIVALS</p>
        <div className="categories-buttons">
          <button>Athletic Kicks</button>
          <button>Plimsoll</button>
          <button>Slip-On</button>
          <button>High Top</button>
        </div>
      <div className="product-parts">
      <div class="owl-carousel owl-theme">

      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
        {mydata.new_arrivals.map((item)=>{
          return(
            <SwiperSlide>
              <NewArrivalsCard image={item.image} name={item.name} price={item.price}/>
            </SwiperSlide>
            )
          })}

          </Swiper>
        {console.log(mydata.new_arrivals)}
      </div>
      </div>
      </section>
      {/* new-arrivals end */}

      </div>
      
  )
}

export default Home

-------------------------------------------------------------------
-------------------------------------------------------------------
-------------------------------------------------------------------
------------------------------------------------------------------- 


      --------------------------------------
      --------------------------------------
      --------------------------------------
      --------------------------------------
--.hero-part scss den sildiyim hisse :::
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

      --------------------------------------
      --------------------------------------
      --------------------------------------
      --------------------------------------