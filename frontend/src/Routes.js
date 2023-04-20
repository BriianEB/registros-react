import { Routes as RoutesContainer, Route } from 'react-router-dom';

import Layout from 'components/shared/Layout';
import Home from 'pages/Home';

function Routes() {
    return (
        <RoutesContainer>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
            </Route>
        </RoutesContainer>
    );
}

export default Routes;
