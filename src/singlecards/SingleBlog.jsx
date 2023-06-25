import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';

// const SingleBlog=({id,photo,title,desc})=> {
//   return (
//   <Col sm={12} md={4}>
//               <Card >
//       <Card.Img variant="top" src={photo} />
//       <Card.Body>
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>
//           {desc}
//         </Card.Text>
//        <LinkContainer to={`/blogs/${id}`}>
//        <Button variant="primary">Read More</Button>
//        </LinkContainer>
//       </Card.Body>
//     </Card>
//   </Col>
//   );
// }


// const { id } = useParams();
// console.log("BUDU ABI : "+ svalue);
// const product = svalue.map(p=>p.id==id);


const SingleBlog = ({id,photo,title,desc,date,author}) => {
return (
    <>
    {/* <LinkContainer to={`/blog/${id}`}> */}
    <div className="col-12 col-sm-6 col-md-6 myblogcard">
        <img src={photo} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="date">
            <p className='date-time'>{date}</p>
            {/* <p className='comment'> {comment} comment </p> */}
            {/* <p className='author'>Author: {author}</p> */}
          </div>
          <h2 className="card-title">{title}</h2>
          <p className="card-text desc">{desc.substring(0,40)}...    <a href="#" >VIEW MORE</a> </p>
          <p className='author'>Author: {author}</p>

        </div>
      </div>
    {/* </LinkContainer> */}

      </>
  )
}

export default SingleBlog;