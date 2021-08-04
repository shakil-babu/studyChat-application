import style from "./Navbar.module.css";
import logo from "../../utilities/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { useContext, useState } from "react";
import { AdminsContext, MembersContext, UserContext } from "../../App";
import { db } from "../../utilities/firebase";
const Navbar = () => {
  const activeStyle = {
    borderTop: "1px solid #5e17eb",
    color: "#5e17eb",
  };

  const navStyle = {
    color: "#5e17eb",
  };

  // current user context
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // all admins context
  const [allAdmins, setAlladmins] = useContext(AdminsContext);
  //check current user admin or not ?
  const isAdmin = allAdmins.find((item) =>
    item.email === loggedInUser.email ? true : false
  );

  // all chat members context
  const [members, setMembers] = useContext(MembersContext);
  const isMember = members.find((item) =>
    item.email === loggedInUser.email ? true : false
  );

  //   state
  const [isNav, setIsNav] = useState(false);

  return (
    <>
      <nav className={style.navbar}>
        <main className={style.navbar__content}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <div className={style.navbar__links}>
            <NavLink activeStyle={activeStyle} exact to="/">
              Home
            </NavLink>
            {isMember && (
              <NavLink activeStyle={activeStyle} to="/room">
                Room
              </NavLink>
            )}
            {!loggedInUser.name && (
              <NavLink activeStyle={navStyle} to="/login">
                Login
              </NavLink>
            )}
            {isAdmin && (
              <NavLink activeStyle={activeStyle} to="/dashboard/requests">
                Dashboard
              </NavLink>
            )}
          </div>

          <div className={style.btn__flex}>
            <Link to="/join">
              <button className={`btn ${style.join__btn}`}>Join Request</button>
            </Link>

            {loggedInUser.name && (
              <div className={style.logout__flex}>
                <button onClick={() => setLoggedInUser({})} className={`btn ${style.log__out}`}>
                  Log out <small>({loggedInUser.name})</small>{" "}
                </button>
              </div>
            )}
          </div>
        </main>

        {/* =============== mobile nav =============== */}
        <main>
          <div className={style.d_flex}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            {isNav ? (
              <ImCross
                onClick={() => setIsNav(false)}
                className={style.cross_icon}
              />
            ) : (
              <RiBarChartHorizontalFill
                onClick={() => setIsNav(true)}
                className={style.bar_icon}
              />
            )}
          </div>

          {isNav && (
            <article className={style.mobile__nav}>
              <div className={style.mobile__nav__links}>
                <NavLink activeStyle={navStyle} exact to="/">
                  Home
                </NavLink>
                {isMember && (
                  <NavLink activeStyle={navStyle} to="/room">
                    Room
                  </NavLink>
                )}
                {!loggedInUser.name && (
                  <NavLink activeStyle={navStyle} to="/login">
                    Login
                  </NavLink>
                )}
                {isAdmin && (
                  <NavLink activeStyle={navStyle} to="/dashboard/requests">
                    Dashboard
                  </NavLink>
                )}
              </div>
              <div className={style.btn__flex}>
                <Link to="/join">
                  <button className={`btn ${style.join__btn}`}>
                    Join Request
                  </button>
                </Link>

                {loggedInUser.name && (
                  <div className={style.logout__flex}>
                    <button onClick={() => setLoggedInUser({})} className={`btn ${style.log__out}`}>
                      Log out <small>({loggedInUser.name})</small>{" "}
                    </button>
                  </div>
                )}
              </div>
            </article>
          )}
        </main>
      </nav>
    </>
  );
};

export default Navbar;
