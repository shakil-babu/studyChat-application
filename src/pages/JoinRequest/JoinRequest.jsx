import style from "./JoinRequest.module.css";
import Footer from "../../components/Footer/Footer";
const JoinRequest = () => {
  return (
    <>
      <section className={`container ${style.join_reques_area}`}>
      <h1>JOIN REQUEST</h1>
        <main className={style.content}>
          <p>
            Are you ready to join with us ? Then, send your valid info click the button below. we'll
            approve you so far as we can.
          </p>
          <div className={style.input__flex}>
            <button className={`btn ${style.send__btn}`}>Click me for join</button>
          </div>
        </main>
      </section>

      <Footer />
    </>
  );
};

export default JoinRequest;
