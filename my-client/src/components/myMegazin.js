import React, { useState } from 'react';
import '../style/myMegazin.css';
import {Link} from 'react-router-dom';
import Moment from 'moment'
export default function Mymegazin(props){
    const [discountIndex,setDiscountIndex]=useState(0);
    const today= Date();
    function discount(btn){
setDiscountIndex(1);
    }
    function sendDiscount(){
        setDiscountIndex(0);

    }
    // console.log(today.day)
     Moment.locale();
    var dt =Date();
    return(
        
        <div class="myMegazin">
      <div class="body">
            <Link to="/"class="left">Back home</Link>
        <Link to="/" class="right">Create new post</Link>
<div>
 {discountIndex==0&&   <button class="wideBtn black" >want to get 20% discount right now?   <button onClick={discount} class="btn red">Click here!</button></button>}
 {discountIndex==1&&   <button class="wideBtn black"> <input placeholder="Name"></input> <input placeholder="Email"></input> <button class="btn blue" onClick={sendDiscount}>Send me!</button></button>}
      <h1>stories</h1>
    <p> {Moment(today).format('dddd')}, {Moment(dt).format('MMM DD yyyy')} </p> 


</div></div>
        </div>
    )
}