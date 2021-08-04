import { useEffect, useState } from "react";
import { db } from "../../../utilities/firebase";
import style from "./ChatRequest.module.css";
import SingleRequUser from "./SingleRequUser";

const ChatRequest = () => {
  // interested users list
  const [requUsers, setRequUsers] = useState([]);

  // get intersted users
  useEffect(() => {
    db.collection("join-requests")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshop) => {
        setRequUsers(
          snapshop.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            img: doc.data().img,
            email: doc.data().email,
          }))
        );
      });
  }, []);

  return (
    <>
      <section className={style.ChatRequest}>
        {requUsers.length > 0 ? (
          <div>
            <h1 style={{color:'greed'}}>Chat requests</h1>
            <p>
              Here, {requUsers.length} peoples sent request for join chat room.
            </p>
          </div>
        ) : (
          <h1 style={{textAlign:'center', color:'red'}}>No request available!</h1>
        )}
        <main className={style.request__area}>
          {requUsers.map((user) => (
            <SingleRequUser user={user} />
          ))}
        </main>
      </section>
    </>
  );
};

export default ChatRequest;
