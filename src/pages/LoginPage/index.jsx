import backgroundLogin from "../../assets/backgroundLogin.jpg";
import styles from "./style.module.scss";

export const LoginPage = () => {
    return(
        <div className="container loginPage">
            <div className={styles.container_content}>
                <div className={styles.login_div}>
                    <h1 className="title loginPage">HQMarvel</h1>

                    <p className="text">A ação mais perto de você!</p>

                    <form action="">
                        <input type="text" />
                    </form>
                </div>
                
                <img id="backgoundLogin" src={backgroundLogin} alt="Background image" />
            </div>
        </div>
    )
};
