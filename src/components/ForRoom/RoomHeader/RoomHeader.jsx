import style from "./RoomHeader.module.css";
import { GoPrimitiveDot } from "react-icons/go";
import { MdCall } from "react-icons/md";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { singleUser } from "../../../utilities/fake";

const RoomHeader = ({show, setShow}) => {
  const { name, img } = singleUser;

  return (
    <>
      <section className={style.header}>
        <main className={style.header__content}>
          <div className={style.left}>
            <img src={img} alt="img" />
            <div>
              <h4>
                {name} <GoPrimitiveDot />
              </h4>
              {!show && (
                <button onClick={() => setShow(true)} className={style.show__btn}>show sidebar</button>
              )}
            </div>
          </div>

          <div className={style.right}>
            <MdCall className={style.call__icon} />
            <BsFillCameraVideoFill className={style.call__icon} />
            <button>sign out</button>
          </div>
        </main>
      </section>
    </>
  );
};

export default RoomHeader;
