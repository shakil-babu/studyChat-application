import style from "./Login.module.css";
import { FaGoogle } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from "react-router-dom";
import { frirebaseConfig } from "../../utilities/firebase";
import { useContext, useState } from "react";
import { UserContext } from "../../App";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if(firebase.apps.length === 0){
    firebase.initializeApp(frirebaseConfig);
}

  // google sign in
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email,photoURL } = result.user;
        const signedInUser = { name: displayName, email:email, img:photoURL};
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
