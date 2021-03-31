import React, { useState } from 'react'
import './Ytube.css'
import { Container } from 'react-bootstrap'
import { allVideo } from './Videos'

const Playlist = (props) => {
    function send(id) {
        // console.log(id)
        return props.get(id)
    }
    const addComment = () => {

    }

    const [play, uplay] = useState();


    const [gif, setgif] = useState(false);
    const [temp, uptemp] = useState('');
    const gifn = "./th.jpg"
    const gify = "./thgif.jpg"



    return (
        <Container className="Licontainer">
            {allVideo?.map((item, index) => (

                <div className="List" 
                onClick={() => send(item)}
                 onMouseOver={(e) => {
                    uptemp(index);
                    index === temp ? setgif(true) : index != temp ? setgif(false) : console.log('')
                }} 
                onMouseOut={() => setgif(false)}>

                    {/* <img src={gif?item.thumbgif:item.thumb} */}
                    <img src={index == temp && gif ? item.thumbgif : item.thumb}  />
                    <div className="tcontain">
                        <h1>{item.title}</h1>
                        <p>{item.pnam}</p>
                        <p>{item.vdate}</p>

                    </div>
                </div>
            ))}
        </Container>
    )
}
export default Playlist;