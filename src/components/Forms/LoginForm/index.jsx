import Input from "../../Input";
import "./style.module.scss";

export const LoginForm = () => {
    return (
        <form className="container form" action="">
            <Input 
                label="Digite seu usuário:"
                id="username"
                type="text"
                placeholder="usuário"
            />

            <Input 
                label="Digite sua senha:"
                id="password"
                type="password"
                placeholder="senha"
            />

            <button className="btn">
                Login
            </button>
        </form>
    )
};
