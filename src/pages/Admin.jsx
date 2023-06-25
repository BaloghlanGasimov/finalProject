import React, { useContext } from 'react'
import { Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import SingleAdmin from '../components/SingleAdmin';
import { ProductContext } from '../context/ProductContext';
import Header from '../components/Header';
// import mydata2 from '../data/data2';
const Admin = () => {
  // mydata.new_arrivals.splice(4,6);
  // mydata.new_arrivals.shift();
  const [products,setProducts]=useContext(ProductContext)
  return (
    <div className='admin '>
        <Header className='main' />
        <div className="container mycontainer mt-5">
            
            
<Col xs={12} md={10}>
<Table className='myadmintable' striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>img</th>
          <th>name</th>
          <th>price</th>
          <th>delete</th>
          <th>edit</th>
        </tr>
      </thead>
      <tbody>
        
      {products.new_arrivals.map((item,index)=>{
        
        return(
          <SingleAdmin key={index} id={index+1} img={item.image} name={item.name} price={item.price} />
        )
        
      })}
        
      </tbody>
    </Table>
</Col>
</div>
    </div>
  )
}

export default Admin