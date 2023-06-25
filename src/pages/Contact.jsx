import React, { useContext,useEffect, useState } from "react";

import Header from '../components/Header'

import { LangDataContext } from '../context/LangDataContext';
import { LangContext } from '../context/LangContext';

const Contact = () => {

  const [langData,setLangData] = useContext(LangDataContext);
    const [lang,setLang] = useContext(LangContext);
    const [mylang,setMylang] = useState(lang=="az"? langData.az: langData.en);

  useEffect(() => {
    if(localStorage.getItem("langMode")=="az"){
      setMylang(langData.az)
    }else{
      setMylang(langData.en)
    }
  },lang)
  
  
  return (
    <div className='contactComponent'>
      <Header className="main"/>
         <section className="contact">
        <div className="hero-part">
          <p>{mylang.contact.home} / {mylang.contact.contact}</p>
          <h2>{mylang.contact.contactUs}</h2>
        </div>
        <div className="form-part">
          <div className="container">
            <div className="row g-5">
              <div className="col-12 col-md-4 info-part">
                <div className="head">
                  <h3>{mylang.contact.info}</h3>
                </div>
                <div className="contact-card">
                  <div className="icon">
                    <i className="fa-solid fa-location-dot" />
                  </div>
                  <div className="text-part">
                    <h4>{mylang.contact.address}</h4>
                    <p>London, United of Kingdom</p>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="icon">
                    <i className="fa-solid fa-mobile-screen" />
                  </div>
                  <div className="text-part">
                    <h4>{mylang.contact.phone}</h4>
                    <p>(+84) 8 3555 3203</p>
                    <p>(+84) 8 3777 3203</p>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="icon">
                    <i className="fa-regular fa-clock" />
                  </div>
                  <div className="text-part">
                    <h4>{mylang.contact.days}</h4>
                    <p>08AM -09PM</p>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="icon email-icon">
                    <i className="fa-regular fa-envelope" />
                  </div>
                  <div className="text-part">
                    <h4>EMAIL</h4>
                    <p className="email-text">themesky.info@gmail.com</p>
                    <div className="social-links">
                      <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f" /></a>
                      <a href="https://twitter.com/"><i className="fa-brands fa-twitter" /></a>
                      <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram" /></a>
                      <a href="https://www.youtube.com/"><i className="fa-brands fa-youtube" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-8 input-parts">
                <div className="head">
                  <h3>{mylang.contact.getTouch}</h3>
                </div>
                <form>
                  <div className="infoPerson">
                    <div className="name-input">
                      <p>{mylang.contact.name}</p>
                      <input type="text" className="name" />
                    </div>
                    <div className="email-input">
                      <p>Email</p>
                      <input type="text" className="email" />
                    </div>
                  </div>
                  <div className="subject-input">
                    <p>{mylang.contact.subject}</p>
                    <input type="text" className="subject" />
                  </div>
                  <div className="message-input">
                    <p>{mylang.contact.message}</p>
                    <textarea name="w3review" rows={6} cols={50} defaultValue={""} />
                  </div>
                  <button className="submit-btn">SUBMIT</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact