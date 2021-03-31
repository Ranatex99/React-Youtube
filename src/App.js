// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import { Link, Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import Myyoutube from './Youtube/Youtube'
import {Col} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import Playlist from './Youtube/YList'
import Navb from './Youtube/ytnav'
import {Container} from 'react-bootstrap'


function App() {

 const [id,upid]=useState("12345");
 const [Oflow, setOflow] = useState("100%") 
 const [flag, setflag] = useState(false)

const getflag=(flag)=>{
  setflag(flag)
}
const Oflowset=()=>{
  flag?setOflow("85vh"):setOflow("100%")
}

  function getid(id){
    // console.log(id)
  upid(id);
  }
useEffect(()=>{

  Oflowset()
},[flag])

  return (
    <div className="App"> 
    <Navb getflag={getflag} />
    <Container>
    <Row style={{height:Oflow}} className="mrow">
    <Col sm="9" md="9" lg="8"><Myyoutube video={id}/></Col>
    <Col sm="3" md="3" lg="4"><Playlist get={getid} /></Col>
    </Row>
    </Container>
    </div>
  );
}
export default App;
