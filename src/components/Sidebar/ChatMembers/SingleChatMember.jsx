import { db } from '../../../utilities/firebase';
import style from './ChatMembers.module.css';

const SingleChatMember = ({member}) => {
    const {name,img,email,id} = member; 


  // remove an user from join-requests
  const removeUserHandler = () => {
    db.collection("chat-members").doc(id).delete();
  };

    return (
        <div className={style.single_chat_member}>
            <img src={img} alt="img" />
            <h4>{name}</h4>
            <h5>{email}</h5>
            <button className='btn' onClick={removeUserHandler}>remove</button>
        </div>
    )
}

export default SingleChatMember
