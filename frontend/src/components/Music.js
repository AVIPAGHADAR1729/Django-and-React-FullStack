import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Music({ music }) {


    return (
        <Card className="my-3 p-3" style={{ width: '18rem' }} >
            <Card.Body>
                <Card.Img src={music.cover_image}></Card.Img>
                <Card.Text as="div">
                    <div className="my-3">
                        <strong>{music.title} | {music.artiste}</strong>
                    </div>
                </Card.Text>
                {/* <a href={music.audio_file} className="btn btn-danger" role="button" >Play</a> */}
                <Link to={`allmusics/${music.id}`} className="btn btn-info">
                    Play
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Music


// import { Card } from 'react-bootstrap'
// import Rating from './Rating'
// import { Link } from 'react-router-dom'


// function Product({ product }) {
//     return (
//         <Card className="my-3 p-3">
//             <Link to={`product/${product._id}`}>
//                 <Card.Img src={product.image}></Card.Img>
//             </Link>
//             <Card.Body>
//                 <Link to={`product/${product._id}`}>
//                     <Card.Title as="div">
//                         <strong>{product.name}</strong>
//                     </Card.Title>
//                 </Link>
//                 <Card.Text as="div">
//                     <div className="my-3">
//                         <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}></Rating>
//                     </div>
//                 </Card.Text>
//                 <Card.Text as="h4">
//                     ${product.price}
//                 </Card.Text>

//             </Card.Body>

//         </Card>
//     )
// }

// export default Product
