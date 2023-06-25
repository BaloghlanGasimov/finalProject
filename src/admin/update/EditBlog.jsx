import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import BlogForm from '../BlogForm';
import { Button, Col, Form } from "react-bootstrap";
import { editBlog, editBlogFromDatabase, removeBlog, removeBlogFromDatabase } from '../../actions/blogAction';

const EditBlog = (props) => {
    const navigate =useNavigate();
    const data = useSelector(state=>state);
    const {id}= useParams();
    const  product = data.find(p=>p.id==id)
    const [iphoto, setiPhoto] = useState(product.photo);
    const [ititle, setiTitle] = useState(product.title);
    const [idesc, setiDesc] = useState(product.desc);
    const [iauthor, setiAuthor] = useState(product.author);
    const [idate, setiDate] = useState(product.date);
    const dispatch=useDispatch();
    const formSubmit = (e) => {
        e.preventDefault();
        if (!iphoto || !ititle || !idesc || !iauthor || !idate ) {
          alert("please, fill input!");
        } else {
        //   props.onFormSubmit({
        //   function onFormSubmit({
        //     photo: iphoto,
        //     title: ititle,
        //     desc: idesc,
        //   });
        dispatch(editBlogFromDatabase(product.id,{title:ititle,desc:idesc,photo:iphoto,author:iauthor,date:idate}))
        navigate('/dashboard')
        window.location.reload()
        }
      };
      const Removeblog=()=>{
        dispatch(removeBlogFromDatabase(product.id))
        navigate('/dashboard')
        window.location.reload()

      }
  return (
    <>
    <h2 className='text-center'>Edit Blog</h2>
   <div className='d-flex justify-content-center align-items-center my-3'>
   <img src={product.photo} alt="" />
   </div>
    {/* <BlogForm /> */}
    <div className="d-flex align-items-center justify-content-center">
      <Col sm={6}>
        <Form onSubmit={formSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Photo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter photo link"
            value={iphoto}
              onChange={(e) => {
                setiPhoto(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
            value={ititle}


              onChange={(e) => {
                setiTitle(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Enter Description"
              value={idesc}
              onChange={(e) => {
                setiDesc(e.target.value);
              }}
            //   value={product.desc}
            
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Enter Description"
              value={iauthor}
              onChange={(e) => {
                setiAuthor(e.target.value);
              }}
            //   value={product.desc}
            
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Enter Description"
              value={idate}
              onChange={(e) => {
                setiDate(e.target.value);
              }}
            //   value={product.desc}
            
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="danger" className='ms-4' type="button" onClick={Removeblog}>
            Delete
          </Button>
        </Form>
      </Col>
    </div>
    </>
  )
}

export default EditBlog 
