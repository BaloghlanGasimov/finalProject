import React from 'react'
import Table from 'react-bootstrap/Table';
// import mydata from '../data/data';
const SingleAdmin = ({id,img,name,price}) => {
    // const DeleteProd=()=>{
        // mydata.new_arrivals.splice(id,id+1);
        // document.querySelector('.deletbtn').innerhtml='auye';
    // }
  return (
    // <div className='singleadmin'>
        <tr className='myadmin'>
          <td>{id}</td>
          <td><img src={img} height={10} alt="productpic" /></td>
          <td>{name}</td>
          <td>${price}</td>
          <td><button className='btn deletbtn btn-danger'>Delete</button></td>
          <td><button className='btn btn-primary'>Edit</button></td>
        </tr>
    // </div>
  )
}

export default SingleAdmin