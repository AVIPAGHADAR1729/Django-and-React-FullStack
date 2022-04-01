import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
// import { ReactVideo } from "reactjs-media";
import ReactPlayer from 'react-player'
import { Card } from 'react-bootstrap'

function VideoDetails({ match }) {
    // console.log(match.params)
    const [video, setVideo] = useState([])
    useEffect(() => {

        // console.log('useEffect is run')
        async function fetchProduct() {
            const { data } = await axios.get(`http://localhost:8000/api/allvideos/${match.params.id}`)
            // console.log(data)
            setVideo(data)
        }
        fetchProduct()
    }, [match.params.id])
    return (
        <div>
            <Link to="/" className="btn btn-primary my-3">Go Back</Link>


            <Card >

                <Card.Body>
                    <Card.Title>{video.title}</Card.Title>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url={video.file}
                            width='100%'
                            height='100%'
                            controls={true}


                        />
                    </div>
                    <Card.Text className="pt-3">
                        {video.description}
                    </Card.Text>

                </Card.Body>
            </Card>


        </div>
    )
}

export default VideoDetails
