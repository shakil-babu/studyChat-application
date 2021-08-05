import style from "./Messages.module.css";
const CurrentUserMessage = ({ message }) => {
  return (
    <>
      <div className={style.current_user}>
        <div className={`${message.img ? style.flex : style.flex__content}`}>
          {message.img && (
            <a target="_blank" href={message.img}>
              <img className={style.other__img} src={message.img} alt="img" />
            </a>
          )}
          {message.text && <h4>{message.text}</h4>}
        </div>
        {!message.img && (
          <img src={message.user_img} className={style.user_img} alt="img" />
        )}
      </div>
    </>
  );
};

export default CurrentUserMessage;
