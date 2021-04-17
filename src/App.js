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
import AddAdmin from './components/AddAdmin/AddAdmin';
import BookAppointment from './components/BookAppointment/BookAppointment';
import ManageService from './components/ManageService/ManageService';
import AddReview from './components/AddReview/AddReview';
import AllServices from './components/AllServices/AllServices';

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
          <Route  path="/services">
            <AllServices></AllServices>
          </Route>
          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute  path="/book">
            <BookAppointment></BookAppointment>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path ="/manage">
            <ManageService></ManageService>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
