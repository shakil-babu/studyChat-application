import style from "./Room.module.css";
import InputEmoji from "react-input-emoji";
import { useContext, useState } from "react";
import axios from "axios";
import { db } from "../../utilities/firebase";
import { UserContext } from "../../App";
import firebase from "firebase";

const Input = () => {
  const [text, setText] = useState("");


  // message info
  const [messages, setMessages] = useState({ text: "", img: "" });
  const [img, setImg] = useState(false);

  // img handler
  const imgHandler = (event) => {
    const imgData = new FormData();
    imgData.set("key", "f37421e34678774c38000dc0a5b30021");
    imgData.append("image", event.target.files[0]);
    console.log(event.target.files[0]);

    // fetch
    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then(function (response) {
        setMessages({img: response.data.data.display_url });
        setImg(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // current user
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // form submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    db.collection('messages').add({
      name:loggedInUser.name,
      email:loggedInUser.email,
      user_img:loggedInUser.img,
      img:messages.img,
      text:text,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setImg(false);
    setMessages({img:""});

  };


  // form submit handler
  const enterHandler = () => {
    db.collection('messages').add({
      name:loggedInUser.name,
      email:loggedInUser.email,
      user_img:loggedInUser.img,
      img:messages.img,
      text:text,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setImg(false);
    setMessages({img:""});

  };
  return (
    <>
      <div className={style.message__flex}>
        <form onSubmit={submitHandler}>
          <div>
            {img && <h4>Image Inserted!</h4>}
            <InputEmoji
              value={text}
              onChange={setText}
              placeholder="Type a message"
              cleanOnEnter
              onEnter={enterHandler}
            />
          </div>

          <div className={style.file__flex}>
            <div className="file-input">
              <input
                onChange={imgHandler}
                type="file"
                name="file-input"
                id="file-input"
                className="file-input__input"
              />
              <label className="file-input__label" for="file-input">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="upload"
                  className="svg-inline--fa fa-upload fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                  ></path>
                </svg>
                <span>img</span>
              </label>
            </div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Input;
