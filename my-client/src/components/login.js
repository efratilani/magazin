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
// localStorage.removeItem("id");
    let user;
      if(refName.current.value&&refPassword.current.value&&refEmail.current.value){
     login(refName.current.value,refPassword.current.value,refEmail.current.value)
    .then(
      (data)=>{
      if(data){
        user=data;
       
        setId(user._id)
        localStorage.setItem("id",user._id)
      }
      else throw "no data! pleas check you are connect"
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
<input ref={refName} ></input><br></br>
<label>Email Address:</label><br></br>
<input ref={refEmail}></input><br></br>
<label>Password:</label><br></br>
<input ref={refPassword} type="password"></input><br></br></div>
<button onClick={loginUser}>login</button>  
      </body>  </div>
       
        

   )
}