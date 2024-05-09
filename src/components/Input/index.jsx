import styles from "./style.module.scss";

export default ({label, id, type, placeholder}) => {
    return(
        <div className="container input text label">
            <label htmlFor={ id }>{ label }</label>
            <input 
                className={styles.inputArea} 
                type={ type } 
                name={ id } 
                id={ id } 
                placeholder={placeholder}
                required
            />
        </div>
    )
};
