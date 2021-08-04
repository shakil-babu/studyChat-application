import { useState } from "react";
import { db } from "../../../utilities/firebase";
import style from "./ChatRequest.module.css";
import firebase from "firebase";

const SingleRequUser = ({ user }) => {
  // accepted state
  const [accept, setAccept] = useState(false);

  const acceptRequHandler = () => {
    db.collection("chat-members").add({
      name: user.name,
      img: user.img,
      email: user.email,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setAccept(true);
    setTimeout(() => {
      removeUserHandler();
    }, 2000);
  };

  // remove an user from join-requests
  const removeUserHandler = () => {
    db.collection("join-requests").doc(user.id).delete();
  };

  return (
    <>
      <div className={style.user}>
        <img src={user.img} alt="img" />
        <div className={style.user__action}>
          <h4>{user.name}</h4>
          <div>
            {accept ? (
              <button style={{ color: "green" }}>Accepted</button>
            ) : (
              <button onClick={acceptRequHandler}>Accept</button>
            )}
            <button onClick={removeUserHandler}>Remove</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleRequUser;
