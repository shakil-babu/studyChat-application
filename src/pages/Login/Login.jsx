import style from './Login.module.css';
import {FaGoogle} from 'react-icons/fa';
import Footer from '../../components/Footer/Footer';

const Login = () => {
    return (
        <>
            <section className={style.login__area}>
                <div className={style.login__box}>
                    <button><FaGoogle className={style.google__icon}/> Sign in with google</button>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default Login
