import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../components/Header'
// const BlogDetailCard = ({svalue}) => {
const BlogDetailCard = () => {

    // const { id } = useParams();
    // const product = svalue.map(p=>p.id==id);
    
    // console.log("BUDU ABI : "+ svalue);
  return (
        <>
        <Header className='main' />
      <div className='blogDetailCard'>
        <h1>blogDetailCard</h1>
        {/* <h1>{product.name}</h1> */}
    </div>
        </>
  )
}
// const mapStateToProps = (state) => {
//     return {
//       svalue: state
//     }
//   }

export default BlogDetailCard
// export default connect(BlogDetailCard)(mapStateToProps)
