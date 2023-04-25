import styles from './styles.module.scss';


function Input(props) {
    const { name, label, register, validations, error } = props;
    
    return (
        <div className={`${styles['form-group']} ${error ? styles['error-control'] : ''}`}>
            <label htmlFor={name}>{label}</label>
            <input className={styles['form-control']} {...register(name, validations)} />
            {error && (
                <div className={styles['error-message']}>{error.message}</div>
            )}
        </div>
    );
}

export default Input;
