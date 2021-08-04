import { useState } from "react";
import { db } from "../../../utilities/firebase";
import style from "./MakeAdmin.module.css";
import firebase from "firebase";

const MakeAdmin = () => {
  const [input, setInput] = useState("");
  const [success, setSuccess] = useState(false);

  // add admin to database
  const submitHandler = (event) => {
    event.preventDefault();
    db.collection("admins").add({
      email: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };
  return (
    <>
      <section className={style.MakeAdmin__section}>
        <h2>Add admin to cntrol this web app.</h2>
        <form onSubmit={submitHandler}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Example@gmail.com"
          />
          <button className="btn" type="submit">
            Add
          </button>
        </form>

        {success && (
          <h6 className={style.success}> added successfully.</h6>
        )}
      </section>
    </>
  );
};

export default MakeAdmin;
