import { Outlet } from 'react-router-dom';

import Header from 'components/shared/Header';
import Footer from 'components/shared/Footer';

import styles from './styles.module.scss';


function Layout() {
    return (
        <div className={styles['page-container']}>
            <Header />

            <main className={styles['main']}>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default Layout;
