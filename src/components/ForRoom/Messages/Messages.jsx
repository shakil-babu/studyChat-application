import { useState } from 'react';
import { fakeUsers } from '../../../utilities/fake';
import style from './Messages.module.css';
import SingleMessage from './SingleMessage';

const Messages = () => {
    const gmail = 'shakilbabu303@gmail.com';

    return (
        <>
            <section className={style.message_area}>
                <main className={style.message_content}>
                    {
                        fakeUsers.map((message, index) => <SingleMessage key={index+1} message={message} gmail={gmail} />)
                    }
                </main>
            </section>
        </>
    )
}

export default Messages
