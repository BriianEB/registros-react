import { Outlet } from 'react-router-dom';

import styles from './styles.module.scss';


function Layout() {
    return (
        <div className={styles['page-container']}>

            <main className={styles['main']}>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
