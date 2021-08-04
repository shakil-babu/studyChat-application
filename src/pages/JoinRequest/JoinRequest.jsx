import style from "./JoinRequest.module.css";
import Footer from "../../components/Footer/Footer";
import { useContext, useState } from "react";
import { UserContext } from "../../App";
import {AiOutlineCheck} from 'react-icons/ai';
import { db } from "../../utilities/firebase";
import firebase from 'firebase';

const JoinRequest = () => {
  // current user from context
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isSent, setIsSent] = useState(false);

  // user join request handler
  const JoinRequHandler = () => {
    db.collection('join-requests').add({
      name:loggedInUser.name,
      img:loggedInUser.img,
      email:loggedInUser.email,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    });

    setIsSent(true);
  }

  return (
    <>
      <section className={`container ${style.join_reques_area}`}>
      <h1>JOIN REQUEST</h1>
        <main className={style.content}>
          <p>
            Are you ready to join with us ? Then, send your valid info click the button below. we'll
            approve you so far as we can.
          </p>
          <div className={style.input__flex}>
            {
              isSent ? (
                <button className={`btn`} style={{color:"green"}}> <AiOutlineCheck className={style.check} /> Your request has been sent.</button>
              ):(
                <button onClick={JoinRequHandler} className={`btn ${style.send__btn}`}>Click me for join</button>
              )
            }
          </div>

        </main>
      </section>

      <Footer />
    </>
  );
};

export default JoinRequest;
