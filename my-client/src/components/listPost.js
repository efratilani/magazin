import React from 'react';
export default function listPost(props){
    const {title,image,category,content}=props;

    return(
        <div class="listPostImage">
        <img src={image}  title={title}></img> <h2>{category}</h2>  <h1>{title}</h1>
        <br></br>
        <p>{content}</p>
        </div>
    )
}