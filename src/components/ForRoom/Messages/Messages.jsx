import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import { db } from "../../../utilities/firebase";
import style from "./Messages.module.css";
import CurrentUserMessage from "./CurrentUserMessage";
import OtherUserMessage from "./OtherUserMessage";

const Messages = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [messages, setMessages] = useState([]);
  // get messages
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshop) => {
        setMessages(
          snapshop.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            user_img: doc.data().user_img,
            email: doc.data().email,
            img: doc.data().img,
            text: doc.data().text,
          }))
        );
      });
  }, []);

  return (
    <>
      <section className={style.message_area}>
        {messages.map((item, index) => {
          if (item.email === loggedInUser.email) {
            return (
              <main className={style.current_user_aera}>
                <CurrentUserMessage message={item} key={index + 1} />
              </main>
            );
          } else {
            return (
              <main className={style.other_user_area}>
                <OtherUserMessage message={item} key={index + 1} />
              </main>
            );
          }
        })}
      </section>
    </>
  );
};

export default Messages;
