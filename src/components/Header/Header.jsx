import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AdminsContext, MembersContext } from "../../App";
import { db } from "../../utilities/firebase";
import style from "./Header.module.css";

const Header = () => {

  const [allAdmins, setAlladmins] = useContext(AdminsContext);

  // get intersted users
  useEffect(() => {
    db.collection("admins")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshop) => {
        setAlladmins(
          snapshop.docs.map((doc) => ({
            id: doc.id,
            email: doc.data().email,
          }))
        );
      });
  }, []);






   // members context
   const [members, setMembers] = useContext(MembersContext);
   // get intersted users
   useEffect(() => {
     db.collection("chat-members")
       .orderBy("timestamp", "desc")
       .onSnapshot((snapshop) => {
         setMembers(
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
