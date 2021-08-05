import style from "./Messages.module.css";
const OtherUserMessage = ({ message }) => {
  return (
    <div className={style.other__user}>
      <img className={style.user} src={message.user_img} alt="img" />
      <div className={`${message.img ? style.content__box : style.content}`}>
        <h6>{message.name}</h6>
        {message.img && (
          <a target="_blank" href={message.img}>
            <img className={style.content__img} src={message.img} alt="img" />
          </a>
        )}
        {message.text && <h4>{message.text}</h4>}
      </div>
    </div>
  );
};

export default OtherUserMessage;
