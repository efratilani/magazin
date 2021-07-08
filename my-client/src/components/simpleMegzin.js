import React, { useState } from 'react';
import '../style/myMegazin.css';
import {Link} from 'react-router-dom';
import Moment from 'moment';
import {getAllPosts} from './service';
import ListPost  from './listPost';
export default function SimpleMegzin(props){
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
const postsArr=getAllPosts();
console.log(postsArr)
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

<ul id="menue">
    <li>Home</li>
    <li>Fashion</li>
    <li>Business</li>
    <li>Travel</li>
    <li>Fashion</li>
    <li>Books</li>
    <li>Cooking</li>
    <li>Fashion</li>
    <li>Business</li>

</ul>

{postsArr.map((x,index)=>
<ListPost key={index} title={x.title} content={x.content} image={x.image} category={x.category}></ListPost>)}
</div>

</div>
        </div>
    )
}