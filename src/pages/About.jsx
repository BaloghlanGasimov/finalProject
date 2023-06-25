import React, { useContext,useEffect, useState } from "react";
import questionicon from "../assets/img/question-icon.webp";
import aboutphoto from "../assets/img/aboutphoto.jpg";
import committedPhoto from "../assets/img/committed-photo.jpg";
import { aboutdata } from "../data/aboutdata";
import Header from "../components/Header";

import { LangDataContext } from '../context/LangDataContext';
import { LangContext } from '../context/LangContext';

const About = () => {
  const [ceoId, setCeoId] = useState(1);
  const ceoTextData = aboutdata.ceodata.find((p) => p.id == ceoId);
  
    const [langData,setLangData] = useContext(LangDataContext);
    const [lang,setLang] = useContext(LangContext);
    const [mylang,setMylang] = useState(lang=="az"? langData.az: langData.en);

  useEffect(() => {
    // const customerCircle = document.querySelector('.customer-circle');
    // customerCircle.style.borderRadius="0px";
    if(localStorage.getItem("langMode")=="az"){
      setMylang(langData.az)
  }else{
    setMylang(langData.en)
  }
  },lang)
  
  return (
    <div className="aboutComponent">
      <Header/>
      <div className="hero">
        <div className="text-part">
          <div className="center">
            <p>
              <span>{mylang.about.home}</span> / {mylang.about.aboutUs}
            </p>
            <h2>{mylang.about.aboutUs}</h2>
          </div>
        </div>
      </div>
      <section className="photoText-part who-are-we">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 img-part">
              <img src={questionicon} alt="" />
            </div>
            <div className="col-12 col-md-6 text-part">
              <h2 className="head">{mylang.about.whoAreWe}</h2>
              <p className="desc">
              {mylang.about.ourPurpose}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="img-section">
        <div className="container img-section-con">
          <img src={aboutphoto} alt="" />
        </div>
      </section>

      {/* <section className="percentage-part">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
            <div className="percentage-card">
              <div className="circle customer-circle">
                <div className="circle-center">

                </div>
                <p className="percentage-number">50%</p>
              </div>
              <div className="text-part">

              </div>
              </div>
            </div>
            <div className="col-12 col-md-6"></div>
            <div className="col-12 col-md-6"></div>
            <div className="col-12 col-md-6"></div>
          </div>
        </div>
      </section> */}

      <section className="photoText-part enzy-committed">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 ">
              <div className="img-part">
                <img src={committedPhoto} alt="" />
                <div className="pinkDiv"></div>
              </div>
            </div>
            <div className="col-12 col-md-6 text-part">
              <h2 className="head">{mylang.about.enzyCommit}</h2>
              <p className="desc">
              {mylang.about.commitDesc1}
                <br />
              {mylang.about.commitDesc2}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ceo-part">
        <div className="container ceo-part-con">
          <div className="ceo-image-part">
            {aboutdata.ceodata.map((item, i) => {
              if (item.id === 1) {
                return (
                  <img
                    className="active ceo-img"
                    onClick={() => {
                      setCeoId(item.id);
                      for (let k = 1; k <= aboutdata.ceodata.length; k++) {
                        document.querySelectorAll(".ceo-img")[k - 1].className =
                          "ceo-img";
                        if (item.id == k) {
                          document.querySelectorAll(".ceo-img")[
                            k - 1
                          ].className = "active ceo-img";
                        }
                      }
                    }}
                    key={item.id}
                    src={item.img}
                    alt=""
                  />
                );
              } else {
                return (
                  <img
                    className="ceo-img"
                    onClick={() => {
                      setCeoId(item.id);
                      for (let k = 1; k <= aboutdata.ceodata.length; k++) {
                        document.querySelectorAll(".ceo-img")[k - 1].className =
                          "ceo-img";
                        if (item.id == k) {
                          document.querySelectorAll(".ceo-img")[
                            k - 1
                          ].className = "active ceo-img";
                        }
                      }
                    }}
                    key={item.id}
                    src={item.img}
                    alt=""
                  />
                );
              }
            })}
          </div>
          {/* {document.querySelectorAll('.ceo-img')[0].className="active ceo-img"} */}
          <div className="text-part">
            <p className="desc">{ceoTextData.desc}</p>
            <p className="name">{ceoTextData.name}</p>
            <p className="company">{ceoTextData.company}</p>
          </div>
        </div>
      </section>

      <section className="executive-direction">
        <div className="container executive-direction-con">
          <div className="head-part">
            <h2>EXECUTIVE DIRECTION</h2>
          </div>
          <div className="row">
            {aboutdata.executiveData.map((item, id) => {
              return (
                <div key={item.id} className="col-12 col-md-4">
                  <div className="executive-card">
                    <div className="img-part">
                      <img
                        src={item.img}
                        alt=""
                      />
                      <div className="social-links">
                        <a
                          className="facebook-icon"
                          target="_blank"
                          href={item.facebook}
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a
                          className="twitter-icon"
                          target="_blank"
                          href={item.twitter}
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a
                          className="instagram-icon"
                          target="_blank"
                          href={item.instagram}
                        >
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a
                          className="linkedin-icon"
                          target="_blank"
                          href={item.linkedin}
                        >
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                    <div className="text-part">
                      <p className="name">{item.name}</p>
                      <p className="job">{item.job}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
