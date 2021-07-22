import React, { useEffect, useState } from 'react';
import '../style/myMegazin.css';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import { getAllPosts } from './service';
import { getPostsByMegazin } from '../mongoService';
import ListPost from './listPost';
export default function SimpleMegzin(props) {
    const {item}=props
    const [discountIndex, setDiscountIndex] = useState(0);
    const [postsArr,setPostsArr]=useState([])
    const today = Date();
    function discount(btn) {
        setDiscountIndex(1);
    }
    function sendDiscount() {
        setDiscountIndex(0);

    }
    useEffect(()=>{
        getPostsByMegazin(item._id).then(
            
            data => {debugger
                setPostsArr(data)
                }
          ).catch(
            err => console.log(err)
          );
    })
    // console.log(today.day)
    Moment.locale();
    var dt = Date();
    
    console.log(postsArr)
    return (

        <div className="myMegazin">
            <div className="body">
                <Link to="/" className="left">Back home</Link>
                <Link to="/create-post" className="right">Create new post</Link>
                <div>
                    {discountIndex == 0 && <button className="wideBtn black" >want to get 20% discount right now?   <button onClick={discount} className="btn red">Click here!</button></button>}
                    {discountIndex == 1 && <button className="wideBtn black"> <input placeholder="Name"></input> <input placeholder="Email"></input> <button className="btn blue" onClick={sendDiscount}>Send me!</button></button>}
                    <h1>{item.name}</h1>
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

                    {(postsArr && postsArr.length>0)?postsArr.map((x, index) =>
                        <ListPost key={index} title={x.name} content={x.content} image={x.image} category={x.category}></ListPost>):<div></div>}
                </div>

            </div>
        </div>
    )
}