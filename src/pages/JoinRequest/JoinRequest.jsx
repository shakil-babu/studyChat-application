import style from "./JoinRequest.module.css";
import Footer from "../../components/Footer/Footer";
const JoinRequest = () => {
  return (
    <>
      <section className={`container ${style.join_reques_area}`}>
      <h1>JOIN REQUEST</h1>
        <main className={style.content}>
          <p>
            Are you ready to join with us ? Then, send your valid email we'll
            approve you so far as we can.
          </p>
          <div className={style.input__flex}>
            <input type="email" placeholder="email" />
            <button className={`btn ${style.send__btn}`}>Send</button>
          </div>
        </main>
      </section>

      <Footer />
    </>
  );
};

export default JoinRequest;
