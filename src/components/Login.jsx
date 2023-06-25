import React, { useRef } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Header from './Header';
import { Button } from 'react-bootstrap';
import {mydata} from '../data/data'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  let emailRef =useRef(null);
  let passwordRef =useRef(null);
  const navigate =useNavigate();

  const sumbitFunc = (e)=>{
    e.preventDefault();
    const oneUserData=mydata.userdata.find(correct=> (correct.email === emailRef.current.value) && (correct.pass ===passwordRef.current.value));
    const alert = document.querySelector('.alert');
    // /

    if(!emailRef.current.value && !passwordRef.current.value){
        alert.innerHTML = '<p>Fill out please</p>';
        alert.className = "alert d-flex bg-warning"
    }else{
      if(oneUserData){
        console.log(oneUserData);
        alert.innerHTML = '<p>Successfully signed</p>';
        alert.className = "alert d-flex bg-success"
        localStorage.setItem("login",oneUserData.username);
        localStorage.setItem("admin",oneUserData.admin);
        // window.location.reload(true)
        navigate('/')
      }
      else{
        console.log("yo emele gelmez");
        alert.innerHTML = '<p>Email or Password is wrong</p>';
        alert.className = "alert d-flex bg-danger"
      }
    }
  }
  return (
    
<div className='loginComponent'>

{/* <p>{passwordRef}</p> */}

        <Header className="main" />

       <div className="form ">
        <div className=" container form-con">
        <div className="alert d-none">
          
        </div>
      <form onSubmit={sumbitFunc}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <div className="password-input">
          <input ref={passwordRef} type="password" className="form-control inputpass" id="exampleInputPassword1" />
          <button type='button' onClick={()=>{
            if(document.querySelector('.inputpass').type == 'text'){
              document.querySelector('.inputpass').type = 'password';
            }else{
              document.querySelector('.inputpass').type = 'text';
            }
            }} ><i className="fa-solid fa-eye"></i> </button>
          </div>
        </div>
        
        <button type="submit" className="btn btn-success">Submit</button>

      </form>
      </div>
      </div>
    </div> 

        
    
  )
}

export default Login




// <div className='loginComponent'>
    //     <Header className="main"/>

    // </div> 

// onClick={()=>{
//             if(document.querySelector('.inputpass').type == 'text'){
//               document.querySelector('.inputpass').type = 'password';
//             }else{
//               document.querySelector('.inputpass').type = 'text';
//             }
//             }}