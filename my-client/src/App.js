import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CreatePost from './components/createPost';
import MyMegazin from './components/myMegazin';
import SimpleMegzin from './components/simpleMegzin'

// import store from './redux/store'
import { getMegazin } from './mongoService';
import { useEffect, Provider, useState } from 'react';
function App() {
  const [megazinArr,setMegazinArr]=useState([])
  useEffect(() => {
    getMegazin().then(
      data => setMegazinArr(data)
    ).catch(
      err => console.log(err)
    );
  }, [])

  return (
    <div className="App">



      <Router>
        <Switch>
          <Route path="/create-post">
            <CreatePost></CreatePost>
          </Route>
          <Route path="/my-Megazin">
            {(megazinArr && megazinArr.length!==0)?
            <MyMegazin>
              {/* <Provider store={store}> */}
              { megazinArr.map(item=>
              <SimpleMegzin item={item}></SimpleMegzin>
             ) }
              {/* </Provider> */}
            </MyMegazin>
:<div></div>}
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
