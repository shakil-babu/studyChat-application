import { useState } from "react";
import { db } from "../../../utilities/firebase";
import style from "./MakeAdmin.module.css";

const SingleAdmin = ({ admin }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState('');


  // update admin
   const updateAdmin = () => {
    db.collection('admins').doc(admin.id).set({
        email:input
    }, {merge:true});

    setInput('');
    setIsEdit(false);
}


// delete admin
const deleteAdmin = () => {
    db.collection('admins').doc(admin.id).delete()
}



  return (
    <div className={style.main}>
      <div className={style.admin}>
        <h4>{admin.email}</h4>

        <div className={style.admin__action}>
          <button onClick={() => setIsEdit(true)} className={`btn ${style.update}`}>edit</button>
          <button onClick={deleteAdmin} className={`btn ${style.delete}`}>delete</button>
        </div>
      </div>

      {
          isEdit && (
              <div className={style.edit__area}>
                  <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder={admin.email}/>
                  <button onClick={updateAdmin} className='btn'>Update</button>
              </div>
          )
      }
    </div>
  );
};

export default SingleAdmin;
