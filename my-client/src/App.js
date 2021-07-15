import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Login from './components/login';
import Header from './components/header'
import {BrowserRouter as Router, Switch,Route}  from 'react-router-dom'
import CreatePost  from './components/createPost';
import MyMegazin from './components/myMegazin';
import {getMegazin} from './mongoService';
import { useEffect, useState } from 'react';
function App() {
  const [id,setId]=useState();
useEffect(()=>{
  
 setId(localStorage.getItem("id"));
  getMegazin();
  
},[])
  
  return (
    <div className="App">
     
<Header id={id} setId={setId}></Header>

     
      <Router>
        <Switch>
          <Route path="/create-post">
           {id&& <CreatePost></CreatePost>}
             {!id&&<Login setId={setId}></Login>}
          </Route>
          <Route path="/my-Megazin">
           {id&& <MyMegazin></MyMegazin>}
            {!id&&<Login setId={setId}></Login>}
          </Route>
          <Route path="/">
       {id&&<Home></Home>}
       {!id&&<Login setId={setId}></Login>}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
