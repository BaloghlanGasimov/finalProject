import React from 'react'
import { Row } from 'react-bootstrap'
import SingleBlog from '../singlecards/SingleBlog'
import { connect } from 'react-redux'
import Header from '../components/Header'
const Blogs = ({ svalue }) => {
  return (
    <div className='blogComponent'>
    <Header className='main'/>
      <h1 className='text-center my-5'>Blog List</h1>
      <div className="container">
      <Row className='g-5'>
        {svalue.map(item => (
          <SingleBlog title={item.title} 
                      desc={item.desc} 
                      date={item.date} 
                      author={item.author} 
                      key={item.id} 
                      photo={item.photo} 
                      id={item.id} />
        ))}
      </Row>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    svalue: state
  }
}

export default connect(mapStateToProps)(Blogs)