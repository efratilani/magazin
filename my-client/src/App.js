import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import {BrowserRouter as Router, Switch,Route}  from 'react-router-dom'

function App() {
  return (
    <div className="App">
    

     
      <Router>
        <Switch>
          <Route path="/create-post">
            <CreatePost></CreatePost>
          </Route>
          <Route path="/my-megazim">
            <MyMegazim></MyMegazim>
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
