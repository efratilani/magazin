import React, { useRef } from 'react';
import '../style/home.css'
import '../style/login.css'
import {login} from '../mongoService';
export default function Login(props){
    const {setId}=props;
    const refName=useRef();
    const refPassword=useRef();
    const refEmail=useRef();

function loginUser(){

    let user;
      if(refName.current.value&&refPassword.current.value&&refEmail.current.value){
     login(refName.current.value,refPassword.current.value,refEmail.current.value)
    .then(
      (data)=>{
      
        user=data;
        
        setId(user._id)
        localStorage.setItem("id",user._id)
      }
    ).catch(
      (err)=>{
        console.log(err);
      }
    );
    }
  
  
  
  

}

    return(
       
        <div className="home login " >
          <body>
          <h1>  Log In With Your Account</h1>
          <div className="alignLeft">
          <label>User Name:</label><br></br>
<input ref={refName} onFocus={true}></input><br></br>
<label>Email Address:</label><br></br>
<input ref={refEmail}></input><br></br>
<label>Password:</label><br></br>
<input ref={refPassword} type="password"></input><br></br></div>
<button onClick={loginUser}>login</button>  
      </body>  </div>
       
        

   )
}