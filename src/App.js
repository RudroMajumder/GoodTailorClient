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
import AddAdmin from './components/AddAdmin/AddAdmin';
import BookAppointment from './components/BookAppointment/BookAppointment';
import ManageService from './components/ManageService/ManageService';
import AddReview from './components/AddReview/AddReview';

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
          <Route path="/dashboard">
            <DashBoard></DashBoard>
          </Route>
          <PrivateRoute path="/review">
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute  path="/book">
            <BookAppointment></BookAppointment>
          </PrivateRoute>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/appointments">
            <Appointments></Appointments>
          </Route>
          <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path ="/manage">
            <ManageService></ManageService>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
