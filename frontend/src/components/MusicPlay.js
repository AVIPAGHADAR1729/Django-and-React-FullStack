import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player';

function MusicPlay({ match }) {
    // console.log(match.params)
    const [music, setMusic] = useState([])
    useEffect(() => {

        // console.log('useEffect is run')
        async function fetchProduct() {
            const { data } = await axios.get(`http://localhost:8000/api/allmusics/${match.params.id}`)
            console.log(data)
            setMusic(data)
        }
        fetchProduct()
    }, [match.params.id])
    return (
        <div>
            <Link to="/" className="btn btn-primary my-3">Go Back</Link>

            <div className="d-flex justify-content-center">
                <ReactAudioPlayer
                    src={music.audio_file}
                    autoPlay
                    controls
                    style={{ padding: '5px' }}
                />
            </div>
        </div>
    )
}

export default MusicPlay
