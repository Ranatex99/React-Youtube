import React, { useState, useRef, useEffect } from 'react';
import YouTube from 'react-youtube';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import './Ytube.css';
import { allVideo, updateComment,comarray} from './Videos'
import {useId} from 'react-id-generator'
import uuid from 'react-uuid'

function Youtube({ video }) {

  // const [cm,upcm]=useState([
  // {Name:video?.comn1 ,Coment:video?.com1,pic:video?.comp1},
  // {Name:video?.comn2 ,Coment:video?.com2,pic:video?.comp2}
  // ])
  const [currentVideoId, setcurrentVideoId] = useState(video?.id)
  useEffect(() => {
    // let newId = uuid()
    // console.log(newId)
    setcurrentVideoId(video?.id)
    setlikeico('./lico.png')
    setdislikeico('./dico.png')
    setSub('SUBSCRIBE')
    setsubgr("red")
    
  }, [video])

  const [abc, uabc] = useState("You were the shadow to my light\nDid you feel us\nAnother start\nYou fade away\nAfraid our aim is out of sight\nWanna see us\nAlive\nWhere are you now\nWhere are you now\nWhere are you now\nWas it all in my fantasy\nWhere are you now\nWere you only imaginary\nWhere are you now\nAtlantis\nUnder the sea\nUnder the sea\nWhere are you now\nAnother dream\nThe monsters running wild inside of me\nI'm faded\nI'm faded\nSo lost\nI'm faded\nI'm faded\nSo lost\nI'm faded\nThese shallow waters, never met\nWhat I needed\nI'm letting go\nA deeper dive\nEternal silence of the sea\nI'm breathing\nAlive\nWhere are you now\nWhere are you now\nUnder the bright\nBut faded lights\nYou set my heart on fire\nWhere are you now\nWhere are you now\nWhere are you now\nAtlantis\nUnder the sea\nUnder the sea\nWhere are you now\nAnother dream\nThe monsters running wild inside of me\nI'm faded\nI'm faded");
  const [ht, setht] = useState("150px");
  const [btxt, setbtxt] = useState("SHOW MORE");
  const [cmv, ucmv] = useState("");
  const [comment, setcomment] = useState('')
  const [is, setis] = useState(false);
  const [likeico,setlikeico]=useState("./lico.png")
  const [dislikeico,setdislikeico]=useState("./dico.png")
  const point = useRef(null);
  const [comlike,setcomlike]=useState(0)
  const [comdislike,setcomdislike]=useState(0)
  const [Sub, setSub] = useState('SUBSCRIBE')
  const [subgr,setsubgr]=useState("red")
  
  const [thiscom, setthiscom] = useState([[]])
  const [funlike,setfunlike]=useState('')

  let randvar=uuid()
let like=0
let dislike=0


  function gencoment(x) {
    let lico='./lico.png'
    let a,b,c;
    function likeup(y){return y}
    function liked(z){let w;w=z;return w}
    b=x.likes.amount
    c=b;
    console.log(b)
    

    return (
 <section>
        <img src="./acico.png" />
        <div><h4>UserName</h4><p>{x.coment}</p>
          <div><img src={lico} onClick={()=>{b=likeup(x.likes.amount+=1);console.log(b)}} /><p className="comlike">{b==x.likes.amount?c:liked(b)}</p><img src="./dico.png" onClick={()=>{x.dislikes.amount+=1}} /><p className="comlike">{x.dislikes.amount}</p><button>REPLY</button></div></div>
      </section>
    )
  }

  const toggleS = () => {
    // btxt==="SHOW MORE"?((setbtxt("SHOW LESS"))(setht(`${point.current.scrollHeight}px`))):(setbtxt("SHOW MORE"))
    if (btxt === "SHOW MORE") {
      setbtxt("SHOW LESS")
      setht(`${point.current.scrollHeight}px`)
    }
    else {
      setbtxt("SHOW MORE")
      setht("150px")
    }
  }
  // setht(`${point.current.scrollHeight}px`)

  const opts = {
    height: '400',
    width: '700',

    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  // const addCommentToVideo = (text) => {
  //   updateComment
  // }

  return (
    <div>
   
      <div>
        <YouTube
          videoId={currentVideoId}                  // defaults -> null
          //   id={string}                       // defaults -> null
          //   className={string}                // defaults -> null
          //   containerClassName={string}       // defaults -> ''
          opts={opts}                        // defaults -> {}
        //   onReady={func}                    // defaults -> noop
        //   onPlay={func}                     // defaults -> noop
        //   onPause={func}                    // defaults -> noop
        //   onEnd={func}                      // defaults -> noop
        //   onError={func}                    // defaults -> noop
        //   onStateChange={func}              // defaults -> noop
        //   onPlaybackRateChange={func}       // defaults -> noop
        //   onPlaybackQualityChange={func}    // defaults -> noop
        />
      </div>
      <div className="downsection">
        <p className="hash">{video?.hash}</p>
        <h1>{video?.title}</h1>
        <span>

          <p>{video?.vdate}</p>

          <img src={likeico} onClick={()=>
            dislikeico==="./dicol.png"||likeico==="./licol.png"?
            setlikeico('./lico.png'):
            setlikeico('./licol.png')} />

          <p>{video.likes}</p>

          <img src={dislikeico} onClick={()=>
            likeico==="./licol.png"||dislikeico==="./dicol.png"?
            setdislikeico('./dico.png'):
            setdislikeico('./dicol.png')} />

          <p>{video.dislikes}</p></span>
      </div>
      <div className="Desp">
        <img src={video?.ppic} />
        <div><h3>{video?.pnam}</h3><h4>{video?.psub}</h4></div>

        <button className="subtn" style={{background:subgr}} onClick={()=>
      { 
         setSub('SUBSCRIBED')
         setsubgr("grey")
      }
          }>{Sub}</button>

        
        <div ref={point} className="Desp-txt" style={{ maxHeight: `${ht}` }} dangerouslySetInnerHTML={{ __html: video?.des }}></div>
      </div>
      <button className="cbtn" onClick={toggleS}>{btxt}</button>
      <hr className="hrr" />
      <div className="Comments">
        <h2>{video?.com}</h2>
        <section>
          <img src="./acico.png" />
          <div><h4></h4><input
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                
                updateComment(currentVideoId, comment,uuid(),0,0)
                setcomment("")
                setthiscom(comarray)
              }
              
            }}
            onChange={(e) => { setcomment(e.target.value)  }}
            type="text" value={comment} placeholder="Commenting Publically As UserName" />
          </div>
        </section>


        {thiscom.map((item) => (
        item.map((subitem)=>(
           subitem.id===currentVideoId?gencoment(subitem):console.log('')
        ))
        ))}


        <section>
          <img src={video?.comp1} />
          <div><h4>{video?.comn1}</h4><p>{video?.com1}</p>
            <div><img src="./lico.png" /><p className="comlike">154</p><img src="./dico.png" /><p className="comlike">33</p><button>REPLY</button></div></div>
        </section>

        <section>
          <img src={video?.comp2} />
          <div><h4>{video?.comn2}</h4><p>{video?.com2}</p>
            <div><img src="./lico.png" /><p className="comlike">113</p><img src="./dico.png" /><p className="comlike">56</p><button>REPLY</button></div></div>
        </section>
        <h className="mx-2 w-100 text-center">CHECk</h>


      </div>
    </div>
  )
}

export default Youtube
