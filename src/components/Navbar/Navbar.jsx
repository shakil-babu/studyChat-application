import style from "./Navbar.module.css";
import logo from "../../utilities/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { useState } from "react";

const Navbar = () => {
  const activeStyle = {
    borderTop: "1px solid #5e17eb",
    color: "#5e17eb",
  };

  const navStyle = {
    color: "#5e17eb",
  };

  //   state
  const [isNav, setIsNav] = useState(false);

  return (
    <>
      <nav className={style.navbar}>
        <main className={style.navbar__content}>
          <img src={logo} alt="logo" />

          <div className={style.navbar__links}>
            <NavLink activeStyle={activeStyle} exact to="/">
              Home
            </NavLink>
            <NavLink activeStyle={activeStyle} to="/room">
              Room
            </NavLink>
            <NavLink activeStyle={activeStyle} to="/login">
              Login
            </NavLink>
            <NavLink activeStyle={activeStyle} to="/dashboard">
              Dashboard
            </NavLink>
          </div>

          <Link to="/join">
            <button className={`btn ${style.join__btn}`}>Join Request</button>
          </Link>
        </main>




























        

        {/* =============== mobile nav =============== */}
        <main>
          <div className={style.d_flex}>
            <img src={logo} alt="logo" />
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
                <NavLink activeStyle={navStyle} to="/room">
                  Room
                </NavLink>
                <NavLink activeStyle={navStyle} to="/login">
                  Login
                </NavLink>
                <NavLink activeStyle={navStyle} to="/dashboard">
                  Dashboard
                </NavLink>
              </div>
              <Link to="/join">
                <button className={`btn ${style.join__btn}`}>
                  Join Request
                </button>
              </Link>
            </article>
          )}
        </main>
      </nav>
    </>
  );
};

export default Navbar;
