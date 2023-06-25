import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Blogs from '../pages/Blogs'
import Contact from '../pages/Contact'
import Shop from '../pages/Shop'
import NotFoundPage from '../pages/NotFoundPage'
import Login from '../components/Login'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ShopDetailCard from '../singlecards/ShopDetailCard'
import { ProductProvider } from '../context/ProductContext'
import { CartProvider } from 'react-use-cart'
import { WishlistProvider } from "react-use-wishlist";
import Cart from '../components/Cart'
import { ThemeContext, ThemeProvider } from '../context/ThemeContext'
import AdminLogin from '../components/AdminLogin'
import Admin from '../pages/Admin'
import AddBlog from '../admin/update/AddBlog'
import EditBlog from '../admin/update/EditBlog'
import Dashboard from '../admin/Dashboard'
import BlogDetailCard from '../components/BlogDetailCard'
import Wishlist from '../components/Wishlist'
import { LangProvider } from '../context/LangContext'
import { LangDataProvider } from '../context/LangDataContext'


const Main = ()=>{
  const [mode] = useContext(ThemeContext);

  return(
     <CartProvider>
      <WishlistProvider>
      <LangDataProvider>
     <ProductProvider>
     <div className={mode}>
        <div className="wrapper">
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/:id' element={<ShopDetailCard/>}></Route>
            <Route path='/shop' element={<Shop/>}></Route>
            <Route path='/shop/:id' element={<ShopDetailCard/>}></Route>
            <Route path='/blog' element={<Blogs/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='admin' element={<Admin/>}></Route>
            <Route path='/adminlogin' element={<AdminLogin/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/wishlist' element={<Wishlist/>}></Route>
            {/* <Route path="/blogs/:id" element={<BlogDetailCard />}></Route> */}
            <Route path="/blog/:id" element={<BlogDetailCard/>}></Route>

              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/dashboard/add" element={<AddBlog />}></Route>
              <Route path="/dashboard/edit/:id" element={<EditBlog />}></Route>

            <Route path='*' element={<NotFoundPage/>}></Route>
        </Routes>
        <Footer/>
        </div>
        </div>
        </ProductProvider>
        </LangDataProvider>
        </WishlistProvider>
        </CartProvider>
  )
}


const AppRouter = () => {

  
  return (
    <>
     <BrowserRouter>
     <LangProvider>
    <ThemeProvider>

      <Main />
      </ThemeProvider>
      </LangProvider>

     </BrowserRouter>  
    </>
  )
}

export default AppRouter