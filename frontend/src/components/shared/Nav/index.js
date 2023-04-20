import LinkButton from 'components/UI/LinkButton';

import styles from './styles.module.scss';


function Nav() {
    return (
        <>
            <button className={styles['nav-toggler']}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`${styles['nav']} d-none`}>
                <ul>
                    <li>
                        <LinkButton color="primary" size="large" to="/">
                            Registrar alumno
                        </LinkButton>
                    </li>
                    <li>
                        <LinkButton color="primary" size="large" to="/">
                            Registrar profesor
                        </LinkButton>
                    </li>
                    <li>
                        <LinkButton color="primary" size="large" to="color">
                            Color
                        </LinkButton>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;
