import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import NewArrivalsCard from "../singlecards/NewArrivalsCard";
import { ProductContext } from "../context/ProductContext";
import { ToastContainer } from "react-toastify";
const Shop = () => {
  // let date1 = new Date("2022-05-12").getTime();
  // console.log(date1);

  const [mydata] = useContext(ProductContext);
  // For dropdown state starting

  const [mycategoriesdrop, setMycategoriesdrop] = useState("d-none");
  const [mybrandsdrop, setMybrandsdrop] = useState("d-none");
  const [mycolordrop, setMycolordrop] = useState("d-none");
  const [mypricedrop, setMypricedrop] = useState("d-none");

  const [increment, setIncrement] = useState(0);

  // useEffect(()=>{
  //   // document.querySelector('.slider-progress').style.backgroundColor="green";
  //   alert("salam");
  // },increment)

  const rangeFunc = (e) => {
    setIncrement(e.target.value);
  };

  const dropFilterFunc = (myfilterdrop) => {
    // let myfilterdrop = "categories";

    if (myfilterdrop === "categories") {
      setMycategoriesdrop("d-flex");
      setMycolordrop("d-none");
      setMybrandsdrop("d-none");
      setMypricedrop("d-none");
      // setActiveIcon("-");
      if (mycategoriesdrop === "d-flex") {
        setMycategoriesdrop("d-none");
      }
    } else if (myfilterdrop === "brands") {
      setMybrandsdrop("d-flex");
      setMycolordrop("d-none");
      setMypricedrop("d-none");
      setMycategoriesdrop("d-none");
      if (mybrandsdrop === "d-flex") {
        setMybrandsdrop("d-none");
      }
    } else if (myfilterdrop === "color") {
      setMycolordrop("d-flex");
      setMypricedrop("d-none");
      setMybrandsdrop("d-none");
      setMycategoriesdrop("d-none");
      if (mycolordrop === "d-flex") {
        setMycolordrop("d-none");
      }
    } else if (myfilterdrop === "price") {
      setMypricedrop("d-flex");
      setMycolordrop("d-none");
      setMybrandsdrop("d-none");
      setMycategoriesdrop("d-none");
      if (mypricedrop === "d-flex") {
        setMypricedrop("d-none");
      }
    }
  };

  // For dropdown state ending

  // For categories filter starting

  const [checkAccesories, setCheckAccesories] = useState(true);
  const [checkCleaner, setCheckCleaner] = useState(false);
  const [checkShoel, setCheckShoel] = useState(false);
  const [checkSocks, setCheckSocks] = useState(false);
  const [checkAthletic, setCheckAthletic] = useState(false);
  const [checkHigh, setCheckHigh] = useState(false);
  const [checkPlimsoll, setCheckPlimsoll] = useState(false);
  const [checkSynthetics, setCheckSynthetics] = useState(false);

  const [checkAgnona, setCheckAgnona] = useState(false);
  const [checkBurberry, setCheckBurberry] = useState(false);
  const [checkKevan, setCheckKevan] = useState(true);
  const [checkRoyal, setCheckRoyal] = useState(false);
  const [checkVersace, setCheckVersace] = useState(false);

  const [checkBlack, setCheckBlack] = useState(false);
  const [checkBlue, setCheckBlue] = useState(false);
  const [checkLightBlue, setCheckLightBlue] = useState(false);
  const [checkBrown, setCheckBrown] = useState(false);
  const [checkRed, setCheckRed] = useState(false);

  const categoryBrandFunc = (e) => {
    switch (e.target.id) {
      case "accessories":
        e.target.checked = !checkAccesories;
        setCheckAccesories(!checkAccesories);

        break;
      case "cleaner":
        e.target.checked = !checkCleaner;
        setCheckCleaner(!checkCleaner);
        break;
      case "shoelace":
        e.target.checked = !checkShoel;
        setCheckShoel(!checkShoel);
        break;
      case "socks":
        e.target.checked = !checkSocks;
        setCheckSocks(!checkSocks);
        break;
      case "athletic":
        e.target.checked = !checkAthletic;
        setCheckAthletic(!checkAthletic);
        break;
      case "high":
        e.target.checked = !checkHigh;
        setCheckHigh(!checkHigh);
        break;
      case "plimsoll":
        e.target.checked = !checkPlimsoll;
        setCheckPlimsoll(!checkPlimsoll);
        break;
      case "synthetics":
        e.target.checked = !checkSynthetics;
        setCheckSynthetics(!checkSynthetics);
        break;
      // brand filter part
      case "agnona":
        e.target.checked = !checkAgnona;
        setCheckAgnona(!checkAgnona);
        break;
      case "burberry":
        e.target.checked = !checkBurberry;
        setCheckBurberry(!checkBurberry);
        break;
      case "kevan":
        e.target.checked = !checkKevan;
        setCheckKevan(!checkKevan);
        break;
      case "royal":
        e.target.checked = !checkRoyal;
        setCheckRoyal(!checkRoyal);
        break;
      case "versace":
        e.target.checked = !checkVersace;
        setCheckVersace(!checkVersace);
        break;
      // color filter part

      case "blackColor":
        setCheckBlack(!checkBlack);
        if (!checkBlack) {
          e.target.className = "circle black myborder";
        } else {
          e.target.className = "circle black ";
        }
        break;
      case "blueColor":
        setCheckBlue(!checkBlue);
        if (!checkBlue) {
          e.target.className = "circle blue myborder";
        } else {
          e.target.className = "circle blue ";
        }
        break;
      case "lightblueColor":
        setCheckLightBlue(!checkLightBlue);
        if (!checkLightBlue) {
          e.target.className = "circle light-blue myborder";
        } else {
          e.target.className = "circle light-blue ";
        }
        break;
      case "brownColor":
        setCheckBrown(!checkBrown);
        if (!checkBrown) {
          e.target.className = "circle brown myborder";
        } else {
          e.target.className = "circle brown";
        }
        break;
      case "redColor":
        setCheckRed(!checkRed);
        if (!checkRed) {
          e.target.className = "circle red myborder";
        } else {
          e.target.className = "circle red ";
        }
        break;

      default:
        break;
    }
  };
  // For categories filter ending
  // console.log("Colde yazdigimdi accessories: " + checkAccesories);
  // console.log("Colde yazdigimdi cleaner: " + checkCleaner);
  // console.log("Colde yazdigimdi shoelace: " + checkShoel);
  // console.log("Colde yazdigimdi socks: " + checkSocks);
  // console.log("Colde yazdigimdi athletic: " + checkAthletic);
  const productFilter = (p) => {
    // let test;
    // let test = p.category=="plimsoll";
    // test+=p.category=="hightop";
    // console.log("test budu: "+ test);
    // return test
    // return p.category=="plimsoll";+p.category=="hightop"

    let category = p.category == "";
    let brand = p.brand == "";
    let color = p.color == "";
    let all;
    if (checkAccesories) {
      category += p.category == "accessories";
    }
    if (checkCleaner) {
      category += p.category == "cleaner-brush";
    }
    if (checkShoel) {
      category += p.category == "shoelace";
    }
    if (checkSocks) {
      category += p.category == "socks";
    }
    if (checkAthletic) {
      category += p.category == "athletic-kicks";
    }
    if (checkHigh) {
      category += p.category == "hightop";
    }
    if (checkPlimsoll) {
      category += p.category == "plimsoll";
    }
    if (checkSynthetics) {
      category += p.category == "synthetics";
    }
    // brand part
    if (checkAgnona) {
      brand += p.brand == "agnona";
    }
    if (checkBurberry) {
      brand += p.brand == "burberry";
    }
    if (checkKevan) {
      brand += p.brand == "kevan-hall";
    }
    if (checkRoyal) {
      brand += p.brand == "royal";
    }
    if (checkVersace) {
      brand += p.brand == "versace";
    }
    // color part

    if (checkBlack) {
      color += p.color == "black";
    }
    if (checkBlue) {
      color += p.color == "blue";
    }
    if (checkLightBlue) {
      color += p.color == "light-blue";
    }
    if (checkBrown) {
      color += p.color == "brown";
    }
    if (checkRed) {
      color += p.color == "red";
    }
    all = category + brand + color;
    return all;
  };

  const product = mydata.new_arrivals.filter(productFilter);
  // filteredproduct=product;
  // const filteredproduct = product.filter(productFilter2);

  return (
    <div className="shopComponent">
      {/* <Header className="main"/> */}
      <Header />
      <div className="hero">
        <div className="text-part">
          <div className="center">
            <p>
              <span>Home</span> / Shop
            </p>
            <h2>High Top</h2>
          </div>
        </div>
      </div>

      <section className="card-section">
        <div className="container">
          <div className="top-filter-part">
            <div className="nameFilter">
              <div className="row">
                <div className="col-12 col-md-5 ">
                  <p
                    className="filterText"
                    onClick={() => {
                      dropFilterFunc("categories");
                    }}
                  >
                    Categories+
                  </p>
                </div>
                <div className="col-12 col-md-4">
                  <p
                    className="filterText"
                    onClick={() => {
                      dropFilterFunc("brands");
                    }}
                  >
                    Brands+
                  </p>
                </div>
                <div className="col-12 col-md-3">
                  <p
                    className="filterText"
                    onClick={() => {
                      dropFilterFunc("color");
                    }}
                  >
                    Color+
                  </p>
                </div>
                {/* <div className="col-12 col-md-2">
                  <p
                    className="filterText"
                    onClick={() => {
                      dropFilterFunc("price");
                    }}
                  >
                    Price+
                  </p>
                </div> */}
              </div>
            </div>

            {/* Categories start */}

            <div
              id="categories-drop"
              className={`dropFilter ` + mycategoriesdrop}
            >
              <div className="row ">
                <div className="col-6 col-sm-4 col-md-3 col-lg-1 me-4">
                  <div className="checkboxFilter">
                    <input
                      type="checkbox"
                      id="accessories"
                      checked={checkAccesories}
                      onChange={categoryBrandFunc}
                    />
                    <p>Accessories</p>
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 ">
                  <div className="checkboxFilter">
                    <input
                      type="checkbox"
                      id="cleaner"
                      checked={checkCleaner}
                      onChange={categoryBrandFunc}
                    />
                    <p>Cleaner Brush</p>
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-1 me-2">
                  <div className="checkboxFilter">
                    <input
                      type="checkbox"
                      id="shoelace"
                      checked={checkShoel}
                      onChange={categoryBrandFunc}
                    />
                    <p>Shoelace</p>
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-1">
                  <div className="checkboxFilter">
                    <input
                      type="checkbox"
                      id="socks"
                      checked={checkSocks}
                      onChange={categoryBrandFunc}
                    />
                    <p>Socks</p>
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="checkboxFilter">
                    <input
                      type="checkbox"
                      id="athletic"
                      checked={checkAthletic}
                      onChange={categoryBrandFunc}
                    />
                    <p>Athletic Kicks</p>
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="checkboxFilter">
                    <input
                      type="checkbox"
                      id="high"
                      checked={checkHigh}
                      onChange={categoryBrandFunc}
                    />
                    <p>High Top</p>
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-1">
                  <div className="checkboxFilter">
                    <input
                      type="checkbox"
                      id="plimsoll"
                      checked={checkPlimsoll}
                      onChange={categoryBrandFunc}
                    />
                    <p>Plimsoll</p>
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-1">
                  <div className="checkboxFilter">
                    <input
                      type="checkbox"
                      id="synthetics"
                      checked={checkSynthetics}
                      onChange={categoryBrandFunc}
                    />
                    <p>Synthetics</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Categories end */}

            {/* Brands start */}
            <div className={`dropFilter ` + mybrandsdrop}>
              <div className="checkboxFilter">
                <input
                  id="agnona"
                  type="checkbox"
                  checked={checkAgnona}
                  onChange={categoryBrandFunc}
                />
                <p>Agnona</p>
              </div>
              <div className="checkboxFilter">
                <input
                  id="burberry"
                  type="checkbox"
                  checked={checkBurberry}
                  onChange={categoryBrandFunc}
                />
                <p>Burberry</p>
              </div>
              <div className="checkboxFilter">
                <input
                  id="kevan"
                  type="checkbox"
                  checked={checkKevan}
                  onChange={categoryBrandFunc}
                />
                <p>Kevan Hall</p>
              </div>
              <div className="checkboxFilter">
                <input
                  id="royal"
                  type="checkbox"
                  checked={checkRoyal}
                  onChange={categoryBrandFunc}
                />
                <p>Royal</p>
              </div>
              <div className="checkboxFilter">
                <input
                  id="versace"
                  type="checkbox"
                  checked={checkVersace}
                  onChange={categoryBrandFunc}
                />
                <p>Versace</p>
              </div>
            </div>
            {/* Brands end */}
            {/* Color start */}
            <div className={`dropFilter ` + mycolordrop}>
              <div className="color-part">
                <div
                  id="blackColor"
                  className="circle black"
                  onClick={categoryBrandFunc}
                ></div>
                <div
                  id="blueColor"
                  className="circle blue"
                  onClick={categoryBrandFunc}
                ></div>
                <div
                  id="lightblueColor"
                  className="circle light-blue"
                  onClick={categoryBrandFunc}
                ></div>
                <div
                  id="brownColor"
                  className="circle brown"
                  onClick={categoryBrandFunc}
                ></div>
                <div
                  id="redColor"
                  className="circle red"
                  onClick={categoryBrandFunc}
                ></div>
              </div>
            </div>
            {/* Color end */}

            {/* Price start */}
            {/* <div className={`dropFilter ` + mypricedrop}>
              <div className="myrangediv">
                <div class="slider-progress"></div>
                <input
                  onChange={rangeFunc}
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  class="myrange"
                />
                <div class="slider-label">{increment}</div>
              </div>
            </div> */}
            {/* Price end */}
          </div>
          <div className="body-card-part">
            <div className="row">
              {/* {mydata.new_arrivals.map((item)=>{ */}
              {product.map((item) => {
                return (
                  <div key={item.id} className="col-12 col-md-6 col-lg-3">
                    <NewArrivalsCard
                      key={item.id}
                      alldata={item}
                      id={item.id}
                      category={item.category}
                      image={item.image}
                      name={item.name}
                      price={item.price}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Shop;
