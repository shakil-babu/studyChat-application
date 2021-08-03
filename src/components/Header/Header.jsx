import { Link } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={` ${style.header__content}`}>
      <main className={` ${style.header__area} container`}>
        <h1 data-text='A place to connect'>A place to connect</h1>
        <p>
          each other. Where you can spend your time with friends. Also, you can
          discuss your problem like study related. A place that makes it easy to
          talk every day and hang out more often. So, do you wanna join a chat
          room ? If true, just you have to send a join request. Click the button
          which mentioned on the top and also below.
        </p>

        <div className={style.btns}>
          <Link to="/join">
            <button className={`btn ${style.join__btn}`}>Join Request</button>
          </Link>
          <Link to="/login">
            <button className={`btn ${style.login__btn}`}>Login</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Header;
