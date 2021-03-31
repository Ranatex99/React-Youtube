import React from 'react';
import {Nav} from 'react-bootstrap'
import {Navbar} from 'react-bootstrap';
import {NavLink} from 'react-bootstrap';
import {NavbarBrand} from 'react-bootstrap';
import {FaBars,FaHome,FaCompass} from 'react-icons/fa'
import {MdVideoLibrary,MdSubscriptions,MdHistory,MdWatchLater} from 'react-icons/md'
import {IoMdHome} from 'react-icons/io'
import {AiFillLike} from 'react-icons/ai'
import {BsPlusCircleFill} from 'react-icons/bs'
import './sidebar.css'
import {useState} from 'react'

const Navb=(props)=>{
const [Side,setSide]=useState(false)
function send(flag) {
  return props.getflag(flag)
}
function sidebar(){

  return(
     <div fixed="top" className="SideBar">
  <div className="Smain">
    <div className="div1">
     <button className="NavBtn Nbtn" onClick={()=>{
       setSide(false)
       send(false)
                     }}>
         <FaBars className="bars" />
         </button>
         <img className="mlogo Slogo" src="./logom.png" />
    </div>
    <hr className="Srule" />
    <div className="Out_Contain">
    <div className="SitemCon">
      <span className="Sitems"><IoMdHome className="Sicon" /><h3>Home</h3></span>
      <span className="Sitems"><FaCompass className="Sicon" /><h3>Explore</h3></span>
      <span className="Sitems"><MdSubscriptions className="Sicon" /><h3>Subscriptions</h3></span>
    </div>
    <hr className="subr" />
    <div className="SitemCon">
      <span className="Sitems"><MdVideoLibrary className="Sicon" /><h3>Library</h3></span>
      <span className="Sitems"><MdHistory className="Sicon" /><h3>History</h3></span>
      <span className="Sitems"><MdWatchLater className="Sicon" /><h3>Watch Later</h3></span>
      <span className="Sitems"><AiFillLike className="Sicon" /><h3>Liked Videos</h3></span>
    </div>
    <hr className="subr" />
    <div className="SitemCon">
      <h2>SUBSCRIPTIONS</h2>
      <span className="Sitems"><img className="Subimg" src="https://yt3.ggpht.com/ytc/AAUvwnimfsf8zKy7Mwb0GOUMJMpnlKE9mJkiEpet8XbB=s176-c-k-c0x00ffffff-no-rj-mo" /><h3>Zaryab Mughal</h3></span>
      <span className="Sitems"><BsPlusCircleFill className="Sicon" /><h3>Browse Channels</h3></span>
    </div>
    <hr className="subr" />
    <div className="SitemCon">
      <h2>MORE FROM YOUTUBE</h2>
      <span className="Sitems"><FaHome className="Sicon" /><h3>Gaming</h3></span>
      <span className="Sitems"><FaCompass className="Sicon" /><h3>Live</h3></span>
      <span className="Sitems"><FaCompass className="Sicon" /><h3>Sports</h3></span>
    </div>
    <hr className="subr" />
    <div className="SitemCon">
      <span className="Sitems"><FaHome className="Sicon" /><h3>Setting</h3></span>
      <span className="Sitems"><FaCompass className="Sicon" /><h3>Report History</h3></span>
      <span className="Sitems"><FaCompass className="Sicon" /><h3>Help</h3></span>
      <span className="Sitems"><FaCompass className="Sicon" /><h3>Send FeedBack</h3></span>
    </div>
    <hr className="Srule" />
    </div>
  </div>
</div>
)
}

    return(
    <div>
       {Side?sidebar():console.log('')}
    <Navbar fixed="top" className="Navmain" expand="lg">

       <button className="NavBtn" onClick={()=>{
         setSide(true)
         send(true)
         }}>
         <FaBars className="bars" />
         </button>

    <Navbar.Brand href="#home"><img className="mlogo" src="./logom.png" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link className="scont" href="#home">
          <input className="sbar" type="text" placeholder="Search" />
          <button className="btns">
            <img className="sico" src="./sico.png" />
            </button>
          </Nav.Link>
      </Nav>
   
    </Navbar.Collapse>
  </Navbar></div>)
}
export default Navb;