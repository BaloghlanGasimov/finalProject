import React from 'react'
import { useRef } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
const AdminLogin = () => {
  const logindata={
    username:'admin',
    password:'admin',
  }
  const navigate = useNavigate();
  const passref = useRef();
  const usernameref = useRef();
  const formSub=(e)=>{
    e.preventDefault();
    if(passref.current.value=='' && usernameref.current.value==''){
      // alert('please fill out gap')
      document.querySelector('.info').innerHTML='please fill out gap';
      document.querySelector('.info').className='info bg-warning';
      // document.querySelector('.info').className='bg-warning'
    }
    else{
      if(passref.current.value!==logindata.password||usernameref.current.value!==logindata.username){
        // alert('wrong password or username')
        document.querySelector('.info').innerHTML='wrong password or username';
      document.querySelector('.info').className='info bg-danger';
      }
      else{
        // navigate('/admin')
        document.querySelector('.true-part').innerHTML="<a href='/admin'>Admin</a> <a href='/dashboard'>Dashboard</a>  "
      }
    }
  }
  return (

    <div className='adminLoginComponent'>
        <Header className="main" />
        <div className='login'>


<Col 	xs={10} md={8}>
    <p className='info'></p>
    <Form onSubmit={formSub}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control ref={usernameref} type="text" placeholder="username" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={passref} type="password" placeholder="password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Col>
      <div className="true-part"></div>
    </div>
    </div>
   
  )
}

export default AdminLogin