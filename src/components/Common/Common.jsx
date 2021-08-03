import style from "./Common.module.css";

const Common = ({ img, text, heading, bg }) => {
  return (
    <>
      <section
        className={style.common}
        style={bg ? { background: "#eee" } : { background: "" }}
      >
        <div className="container">
          <main className={style.content}>
            {bg ? (
              <>
                <img src={img} alt="" />
                <div className={style.content__info}>
                  <h1>{heading}</h1>
                  <p>{text}</p>
                </div>
              </>
            ) : (
              <>
                <div className={style.content__info}>
                  <h1>{heading}</h1>
                  <p>{text}</p>
                </div>
                <img src={img} alt="" />
              </>
            )}
          </main>
        </div>
      </section>
    </>
  );
};

export default Common;
