import style from "./UserList.module.css";
import { BsSearch } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { CgChevronDoubleLeftR } from "react-icons/cg";
import { useEffect, useState } from "react";
import { db } from "../../../utilities/firebase";

const UserList = ({show, setShow}) => {

  const [members, setMembers] = useState([]);
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
    <>
      <section className={style.usersList__area}>
        <div>
        <CgChevronDoubleLeftR onClick={() => setShow(false)} title='HIDE SIDEBAR' className={style.left__arrow}/>
          <div className={style.search__box}>
            <BsSearch className={style.search__icon} />
            <input type="text" placeholder="Search users" />
          </div>
        </div>

        <div className={style.recent__users}>
          <h2>Recent</h2>
          <div className={style.all__recent__users}>
            {members.map((user) => {
              return (
                <div className={style.single__user}>
                  <img src={user.img} alt="img" />

                  <div className={style.user__info}>
                    <h4>
                      {user.name}
                      <GoPrimitiveDot className={style.dot__icons} />
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default UserList;
