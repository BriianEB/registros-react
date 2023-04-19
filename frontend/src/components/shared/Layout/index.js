import { Outlet } from 'react-router-dom';


function Layout() {
    return (
        <div className="page-container">

            <main className="main">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
