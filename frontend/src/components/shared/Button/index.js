import styles from '../Button/styles.module.scss';


function Button(props) {
    const { color, size, variant, ...otherProps } = props;

    const classes = [];

    if (color) {
        classes.push(styles['btn-' + color]);
    } else {
        classes.push(styles['btn-primary']);
    }

    if (size) {
        classes.push(styles['btn-' + size]);
    }

    if (variant) {
        classes.push(styles['btn-' + variant]);
    }

    return (
        <button className={classes.join(' ')} {...otherProps}>
            {props.children}
        </button>
    );
}

export default Button;
