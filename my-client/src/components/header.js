import React from 'react';
import { connect } from 'react-redux';
import '../style/header.css'
import menu from '../assest/image/menu.png';
import point from '../assest/image/point.png';
import profil from '../assest/image/profil.png';
export default function Header(props){
    const {id,setId}=props;
    return(  <header className="header">
    <div dir="rtl" className="alighRight">
    <img className="img-button" src={menu}></img>
    <img className="img-button"src={point}></img>
    <img className="img-button"src={profil}></img>
    </div>
   </header>)
}
