import { Link } from 'react-router-dom';

import Nav from 'components/shared/Nav';

import styles from './styles.module.scss';


function Header() {
    return (
        <header className={styles['header']}>
            <div className={styles['header-content']}>
                <div className={styles['logo-container']}>
                    <Link to="/"><span className={styles['logo']}></span></Link>
                </div>
            
                <Nav />
            </div>
        </header>
    );
}

export default Header;
