import style from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#000b76"
            fill-opacity="1"
            d="M0,160L48,165.3C96,171,192,181,288,186.7C384,192,480,192,576,176C672,160,768,128,864,133.3C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        <main className={style.footer__content}>
          <h1>STUDY CHAT</h1>
          <h3>Imagine a place to connect each other</h3>
          <p>
            A place that makes it easy to talk every day and hang out more
            often.
          </p>
          <p className={style.copyright}>
            <mark>&copy; copyright by STUDY CHAT </mark>
          </p>
        </main>
      </footer>
    </>
  );
};

export default Footer;
