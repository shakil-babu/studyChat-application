import React from "react";
import "./Sidebar.css";
import {AiOutlineUsergroupAdd } from "react-icons/ai"; 
import {BsFillChatSquareQuoteFill, BsFillPersonPlusFill, BsPeopleFill } from "react-icons/bs"; 
import {BrowserRouter as Router,Switch,Route,NavLink,
} from "react-router-dom";
import ChatRequest from "./ChatRequest/ChatRequest";
import ChatMembers from "./ChatMembers/ChatMembers";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import AllAdmins from "./MakeAdmin/AllAdmins";

const routesWithCom = [
  {
    path: "/dashboard/requests",
    exact: true,
    sidebar: () => <ChatRequest/>
  },
  {
    path: "/dashboard/chat-members",
    sidebar: () => <ChatMembers/>
  },
  {
    path: "/dashboard/make-admin",
    sidebar: () => <MakeAdmin/>
  },
  {
    path: "/dashboard/admins",
    sidebar: () => <AllAdmins/>
  }
];


const Sidebar = () => {
  return (
    <>
      <Router>
        <section className="sidebar-main-area">
          <div className="sidebar-left-main-part">
            <h1>Study chat</h1>
            <div className="nav-links">
                <NavLink
                  style={{ textDecoration: "none" }}
                  activeClassName={"bg"}
                  to="/dashboard/requests"
                  className="action-flex"
                >
                  <BsFillChatSquareQuoteFill className="action-icon" />
                  <p>requests</p>
                </NavLink>
               
                <NavLink
                  style={{ textDecoration: "none" }}
                  activeClassName={"bg"}
                  to="/dashboard/chat-members"
                  className="action-flex"
                >
                  <AiOutlineUsergroupAdd className="action-icon" />
                  <p>chat members</p>
                </NavLink>
                <NavLink
                  style={{ textDecoration: "none" }}
                  activeClassName={"bg"}
                  to="/dashboard/make-admin"
                  className="action-flex"
                >
                  <BsFillPersonPlusFill className="action-icon" />
                  <p>make admin</p>
                </NavLink>
                <NavLink
                  style={{ textDecoration: "none" }}
                  activeClassName={"bg"}
                  to="/dashboard/admins"
                  className="action-flex"
                >
                  <BsPeopleFill className="action-icon" />
                  <p>all admins</p>
                </NavLink>
              </div>
          </div>

          <div className="all-info-part">
            <div className="info-main-part-here">
              <Switch>
                {routesWithCom.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.sidebar />}
                  />
                ))}
              </Switch>
            </div>
          </div>
        </section>
      </Router>
    </>
  );
};

export default Sidebar;