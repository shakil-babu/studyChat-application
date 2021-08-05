import style from "./RoomHeader.module.css";
import { GoPrimitiveDot } from "react-icons/go";
import { MdCall } from "react-icons/md";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { useContext } from "react";
import { UserContext } from "../../../App";

const RoomHeader = ({show, setShow}) => {
  const  [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <>
      <section className={style.header}>
        <main className={style.header__content}>
          <div className={style.left}>
            <img src={loggedInUser.img} alt="img" />
            <div>
              <h4>
                {loggedInUser.name} <GoPrimitiveDot className={style.active} />
              </h4>
              {!show && (
                <button onClick={() => setShow(true)} className={style.show__btn}>show sidebar</button>
              )}
            </div>
          </div>

          <div className={style.right}>
            <MdCall className={style.call__icon} />
            <BsFillCameraVideoFill className={style.call__icon} />
          </div>
        </main>
      </section>
    </>
  );
};

export default RoomHeader;
