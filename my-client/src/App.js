import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import {BrowserRouter as Router, Switch,Route}  from 'react-router-dom'
import CreatePost  from './components/createPost';
import MyMegazin from './components/myMegazin'
function App() {
  return (
    <div className="App">
    

     
      <Router>
        <Switch>
          <Route path="/create-post">
            <CreatePost></CreatePost>
          </Route>
          <Route path="/my-Megazin">
            <MyMegazin></MyMegazin>
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
