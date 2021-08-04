import { useContext, useEffect } from 'react';
import { AdminsContext } from '../../../App';
import { db } from '../../../utilities/firebase';
import style from './MakeAdmin.module.css';
import SingleAdmin from './SingleAdmin';

const AllAdmins = () => {
    const [allAdmins, setAlladmins] = useContext(AdminsContext);
    return (
        <>
            <section className={style.all__admins}>
                <h1>All admins here :</h1>

                {
                    allAdmins.map((admin) => <SingleAdmin admin={admin} key={admin.id}/>)
                }
            </section>
        </>
    )
}

export default AllAdmins
