import React, { useEffect } from 'react';
import Header from './Header'
import '../style/App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CheckOut from './CheckOut';
import LogIn from './LogIn';
import {auth} from '../firebase'
import {useStateValue} from '../providers/StateProvider'

function App() {
  const [state, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        //logged in
        dispatch({
          type: 'SET_USER',
          user: authUser.email
        })
      }else{
        //logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path='/login'>
          <LogIn/>
        </Route>
        <Route path='/checkout'>
        <Header/>
          <CheckOut/>
        </Route>
        <Route path='/'>
        <Header/>
          <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
