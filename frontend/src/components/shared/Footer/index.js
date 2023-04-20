import { Link } from 'react-router-dom';

import styles from './styles.module.scss';


function Footer() {
    return (
        <footer className={styles['footer']}>
            <div className={styles['footer-wrapper']}>
                <hr />
                <div className={styles['footer-content']}>
                    <div className={styles['footer-info']}>
                        <span>© Copyright {new Date().getFullYear()}</span>
                    </div>
                    <div className={styles['footer-options']}>
                        <Link to="/">Inicio</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
