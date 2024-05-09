import backgroundLogin from "../../assets/backgroundLogin.jpg";
import { LoginForm } from "../../components/Forms/LoginForm";
import styles from "./style.module.scss";

export const LoginPage = () => {
    return(
        <div className="container loginPage">
            <div className={styles.container_content}>
                <div className={styles.login_div}>
                    <h1 className="title loginPage">HQMarvel</h1>

                    <p className="text">A ação mais perto de você!</p>

                    <LoginForm />

                    <span className="text span">
                        Em buscar de aventuras? <a href="#">Registre-se</a>
                    </span>
                </div>
                
                <img id="backgoundLogin" src={backgroundLogin} alt="Background image" />
            </div>
        </div>
    )
};
