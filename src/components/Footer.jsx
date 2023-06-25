import React, { useContext, useEffect, useState } from 'react'
import logo from '../assets/img/main-logo-dark.png'

import { LangDataContext } from '../context/LangDataContext';
import { LangContext } from '../context/LangContext';

const Footer = () => {
    
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
    <div className='footer'>
        <div className="footer-top">
        <div className="logo-part">
            <img src={logo} alt="" />
        </div>
        <div className="links">
            <div className="row">
                <div className="col-12 col-md-3 about">
                    <ul>
                        <li className='d-flex'><i className="fa-solid fa-location-dot"></i> 868 Fake Street, New York</li>
                        <li><i className="fa-solid fa-mobile-screen-button"></i>(+00) 025-1234-5678</li>
                        <li><i className="fa-regular fa-envelope"></i>themesky.info@gmail.com</li>
                        <li><i className="fa-brands fa-facebook-f"></i> <i className="fa-brands fa-twitter"></i> <i className="fa-brands fa-flickr"></i> <i className="fa-brands fa-instagram"></i></li>
                    </ul>
                </div>
                <div className="col-12 col-md-3 social-links policies">
                    <ul>
                        <li className='head'>{mylang.footer.policies}</li>
                        <li>{mylang.footer.returns}</li>
                        <li>{mylang.footer.payment}</li>
                        <li>{mylang.footer.delivery}</li>
                        <li>{mylang.footer.store}</li>
                        <li>{mylang.footer.termsOfUse}</li>
                    </ul>
                </div>
                <div className="col-12 col-md-3 social-links  information">
                <ul>
                        <li className='head'>{mylang.footer.informations}</li>
                        <li>{mylang.footer.aboutUs}</li>
                        <li>{mylang.footer.careers}</li>
                        <li>{mylang.footer.events}</li>
                        <li>{mylang.footer.faq}</li>
                        <li>{mylang.footer.contactUs}</li>
                    </ul>
                </div>
                <div className="col-12 col-md-3 social-links  get-help">
                <ul>
                        <li className='head'>{mylang.footer.help}</li>
                        <li>{mylang.footer.helpCenter}</li>
                        <li>{mylang.footer.contactUs}</li>
                        <li>{mylang.footer.paymentOpt}</li>
                        <li>{mylang.footer.orders}</li>
                        <li>{mylang.footer.careers}</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        <div className="footer-bottom">
            <p>{mylang.footer.rightsReserved}</p>
        </div>
    </div>
  )
}

export default Footer