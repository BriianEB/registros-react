import styles from '../Button/styles.module.scss';


function Button(props) {
    const classes = [];
    const color = `btn-${props.color ? props.color : 'primary'}`;
    const size = props.size ? `btn-${props.size}` : '';
    const variant = props.variant ? `btn-${props.variant}` : '';

    if (color) {
        classes.push(styles[color]);
    }

    if (size) {
        classes.push(styles[size]);
    }

    if (variant) {
        classes.push(styles[variant]);
    }

    return (
        <button
            className={classes.join(' ')}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

export default Button;
