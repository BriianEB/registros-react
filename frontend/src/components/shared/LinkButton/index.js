import { Link } from 'react-router-dom';

import styles from '../Button/styles.module.scss';


function LinkButton(props) {
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
        <Link className={classes.join(' ')} to={props.to}>
            {props.children}
        </Link>
    );
}

export default LinkButton;
