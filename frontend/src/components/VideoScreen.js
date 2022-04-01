import { Container, Row, Col } from 'react-bootstrap'
// import data from '../data'
import VideoList from './VideoList';
import { useState, useEffect } from 'react'
import axios from 'axios';

function VideoScreen() {
    const [data, setData] = useState([])

    useEffect(() => {
        // console.log('useEffect is run')
        async function fetchProduct() {
            const { data } = await axios.get('http://localhost:8000/api/allvideos/')
            console.log(data)
            setData(data)
        }
        fetchProduct()
    }, [])
    return (
        <div>
            <h4>Enjoy the Pokemon...</h4>

            <Container>

                <Row>
                    {
                        // sm={12} md={6} lg={4} xl={3}
                        data.map((item) => (
                            <Col sm={4} key={item.id} >
                                <VideoList video={item}></VideoList>
                            </Col>
                        ))
                    }
                </Row>

            </Container>
        </div>
    )
}

export default VideoScreen
