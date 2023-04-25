import { useEffect } from 'react';

//import usePageTitle from 'hooks/usePageTitle';
import useApi from 'hooks/useApi';
import AlumnosTable from 'components/alumnos/AlumnosTable';
import ProfesoresTable from 'components/profesores/ProfesoresTable';

import styles from './styles.module.scss';


function Home() {
    //usePageTitle('Registros');
    const [ getAlumnos, alumnosStatus, alumnos, alumnosError ] = useApi.get('/alumnos');
    const [ getProfesores, profesoresStatus, profesores, profesoresError ] = useApi.get('/profesores');

    useEffect(function () {
        getAlumnos();
        getProfesores();
    }, [getAlumnos, getProfesores]);

    if (alumnosStatus !== 'completed' || profesoresStatus !== 'completed') {
        return null;
    }

    if (alumnosError) {
        console.log(alumnosError);
    }

    if (profesoresError) {
        console.log(profesoresError);
    }

    return (
        <>
            <div className={styles['section']}>
                <h2>Lista de alumnos</h2>

                <div className={styles['table-container']}>
                    <AlumnosTable alumnos={alumnos} />
                </div>
            </div>

            <div className={styles['section']}>
                <h2>Lista de profesores</h2>

                <div className={styles['table-container']}>
                    <ProfesoresTable profesores={profesores} />
                </div>
            </div>
        </>
    );
}

export default Home;
