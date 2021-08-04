import { useContext, useEffect } from "react";
import { MembersContext } from "../../../App";
import { db } from "../../../utilities/firebase";
import style from "./ChatMembers.module.css";
import SingleChatMember from "./SingleChatMember";

const ChatMembers = () => {
  // members context
  const [members, setMembers] = useContext(MembersContext);
  
  return (
    <>
      <section className={style.section}>
          {
              members.length > 0 ? <h1>There are {members.length} members of this group</h1> : <h1 style={{color:"red"}}>No members here!</h1>
          }
        <article className={style.chat__member}>
          <main>
            {members.map((member) => (
              <SingleChatMember member={member} />
            ))}
          </main>
        </article>
      </section>
    </>
  );
};

export default ChatMembers;
