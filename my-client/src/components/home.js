import React from 'react'
import img from '../assest/image/‏‏p1.JPG'
import '../style/home.css'
import {useHistory} from 'react-router-dom'

export default function Home(props) {


    const history = useHistory();

    function createPost() {
        history.push("/create-post");
    }
    function mymegazin() {
        history.push("/my-megazin");
    }

    return (
        <div className="body home">
            <img src={img}></img>
            <h1>what do you want to do today?</h1>
            <div className="divContianer">
                <div className="divButton">
                    <button onClick={createPost}></button>
                    <h2>create post</h2>
                </div>
                <div className="divButton">
                    <button onClick={mymegazin}></button>
                    <h2>my megazin</h2>
                </div>
            </div>
        </div>
    )

}