import style from "./UserList.module.css";
import { BsSearch } from "react-icons/bs";
import { fakeUsers } from "../../../utilities/fake";
import { GoPrimitiveDot } from "react-icons/go";
import { CgChevronDoubleLeftR } from "react-icons/cg";

const UserList = ({show, setShow}) => {

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
            {fakeUsers.map((user) => {
              return (
                <div className={style.single__user}>
                  <img src={user.img} alt="img" />

                  <div className={style.user__info}>
                    <h4>
                      {user.name}{" "}
                      <GoPrimitiveDot className={style.dot__icons} />
                    </h4>
                    <p>{user.msg}</p>
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
