import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function VideoList({ video }) {
    return (
        <div>
            <Card className="my-3 p-3" style={{ width: '18rem' }} >
                <Card.Body>

                    <Card.Text>
                        {video.title}
                    </Card.Text>
                    <Link to={`allvideos/${video.id}`} className="btn btn-info">
                        Play
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default VideoList
