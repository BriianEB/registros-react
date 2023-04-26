import { Routes as RoutesContainer, Route } from 'react-router-dom';

import Layout from 'components/shared/Layout';

import AlumnoDetails  from 'pages/alumnos/AlumnoDetails';
import Color from 'pages/Color';
import CreateAlumno from 'pages/alumnos/CreateAlumno';
import CreateProfesor from 'pages/profesores/CreateProfesor';
import Home from 'pages/Home';
import ProfesorDetails from 'pages/profesores/ProfesorDetails';

function Routes() {
    return (
        <RoutesContainer>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="color" element={<Color />} />
                <Route path="alumnos">
                    <Route path=":id" element={<AlumnoDetails />} />
                    <Route path="create" element={<CreateAlumno />} />
                </Route>
                <Route path="profesores">
                    <Route path=":id" element={<ProfesorDetails />} />
                    <Route path="create" element={<CreateProfesor />} />
                </Route>
            </Route>
        </RoutesContainer>
    );
}

export default Routes;
