import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import JoinRequest from './pages/JoinRequest/JoinRequest';
import Login from './pages/Login/Login';
import Room from './pages/Room/Room';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/join' component={JoinRequest}/>
          <Route exact path='/room' component={Room}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </BrowserRouter>   
    </>
  )
}

export default App
