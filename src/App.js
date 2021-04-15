import './App.css';import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import PrivateRoute from './components/Login/PrivateRoute';
import AddService from './components/AddService/AddService';
import Appointments from './components/DashBoard/Appointments/Appointments';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]} >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/login">
            <Login></Login>
          </Route>
          <Route  path="/dashboard">
            <DashBoard></DashBoard>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/appointments">
            <Appointments></Appointments>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
