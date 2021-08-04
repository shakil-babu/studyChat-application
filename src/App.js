import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import JoinRequest from "./pages/JoinRequest/JoinRequest";
import Login from "./pages/Login/Login";
import Room from "./pages/Room/Room";

export const UserContext = createContext();
export const AdminsContext = createContext();
export const MembersContext = createContext();
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [allAdmins, setAlladmins] = useState([]);
  const [members, setMembers] = useState([]);

  return (
    <MembersContext.Provider value={[members, setMembers]}>
      <AdminsContext.Provider value={[allAdmins, setAlladmins]}>
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <PrivateRoute exact path="/join">
                  <JoinRequest/>
              </PrivateRoute>
              <PrivateRoute exact path="/room">
                <Room/>
              </PrivateRoute>
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard/requests" >
                <Dashboard/>
              </PrivateRoute>
            </Switch>
          </BrowserRouter>
        </UserContext.Provider>
      </AdminsContext.Provider>
    </MembersContext.Provider>
  );
};

export default App;
