import backgroundLogin from "../../assets/backgroundLogin.jpg";
import styles from "./style.module.scss";

export const LoginPage = () => {
    return(
        <div className="container loginPage">
            <div className={styles.login_div}>
                <p>OLÁMUNDO</p>
            </div>
            
            <img id="backgoundLogin" src={backgroundLogin} alt="Background image" />

        </div>
    )
};
