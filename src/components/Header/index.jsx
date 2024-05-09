import logo from "../../assets/logo.png";
import styles from "./style.module.scss";

export const Header = () => {
    return(
        <header className="container header">
            <div className={styles.container_content}>
                <div className={styles.div_userInfos}>
                    <h2 className="text header">Username</h2>
                    <img src="#" alt="Darkmode" />
                </div>

                <img id="logo" src={ logo } alt="Logo Marvel" />

                <div className={styles.div_cart}>
                    <img src="#" alt="Carrinho" />
                </div>
            </div>
        </header>
    )
}