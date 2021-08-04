import style from "./Login.module.css";
import { FaGoogle } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";
import firebase from "firebase";
import "firebase/auth";
import { useHistory, useLocation } from "react-router-dom";
import { firebaseApp } from "../../utilities/firebase";
import { useContext, useState } from "react";
import { UserContext } from "../../App";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebaseApp();
  }

  // google sign in
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
        // ...
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <>
      <section className={style.login__area}>
        <div className={style.login__box}>
          <button onClick={handleGoogleSignIn}>
            <FaGoogle className={style.google__icon} /> Sign in with google
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Login;
