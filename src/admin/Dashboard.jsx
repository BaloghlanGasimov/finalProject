import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import Header from '../components/Header'

const Dashboard = () => {
    const pvlaue = useSelector(state=>state);
    
  return (
    <div className='dashboard' > 
      <Header className='main' />
        <h1 className='text-center my-5 headtext'>Admin Panel</h1>
        <LinkContainer to="/dashboard/add">
                <Button variant='success'>Add</Button>
        </LinkContainer>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Photo</th>
          <th>Title</th>
          <th>Description</th>
          <th>Author</th>
          <th>Date</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {pvlaue.map((item,i)=>{
            return  (   <tr key={i}>
                <td>{i+1}</td>
                <td><img width={100} src={item.photo} alt="" /></td>
                <td>{item.title}</td>
                <td>{item.desc}</td>
                <td>{item.author}</td>
                <td>{item.date}</td>
                <td>
                    <LinkContainer to={`/dashboard/edit/${item.id}`}>
                    <Button variant='warning'>Edit</Button>
                    </LinkContainer>
                </td>
              </tr>)
        })}
     
       
      </tbody>
    </Table>
    </div>
  )
}

export default Dashboard