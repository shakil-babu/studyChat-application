import style from "./Messages.module.css";
const SingleMessage = ({ message, gmail }) => {
  let isUser = gmail === message.email;

  return (
    <>
      <div className={style.single_message}>
        {isUser ? (
          <div className={style.current_user_msg_flex}>
            <h4>{message.msg}</h4>
            <img src={message.img} alt="img" />
          </div>
        ) : (
          <div className={style.message_flex}>
            <img src={message.img} alt="img" />
            <div>
              <h6>{message.name}</h6>
              <h4>{message.msg}</h4>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleMessage;
