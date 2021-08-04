import Messages from "../../components/ForRoom/Messages/Messages";
import RoomHeader from "../../components/ForRoom/RoomHeader/RoomHeader";
import UserList from "../../components/ForRoom/UserList/UserList";
import style from "./Room.module.css";
import Input from "./Input";
import { useEffect, useState } from "react";

const Room = () => {
  const [show, setShow] = useState(true);



  useEffect(() => {
    window.addEventListener('resize', () => {
      const myWidth  = window.innerWidth;
      if(myWidth < 768){
          setShow(false);
      }else{
          setShow(true)
      }
   })
  },[])
  return (
    <>
      <section className={` ${style.room__wrapper}`}>
        <main className={style.room__main}>
          {
              show && (
                <div className={style.users__area}>
                <UserList show={show} setShow={setShow} />
              </div>
              )
          }

          <div className={`${show ? style.others__content : style.others__content__hundred}`}>
            <RoomHeader show={show} setShow={setShow} />
            <Messages />
            <Input />
          </div>
        </main>
      </section>
    </>
  );
};

export default Room;
