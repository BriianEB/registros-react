import { useEffect } from 'react';

//import usePageTitle from 'hooks/usePageTitle';
import useApi from 'hooks/useApi';
import AlumnosTable from 'components/alumnos/AlumnosTable';

import styles from './styles.module.scss';


function Home() {
    //usePageTitle('Registros');
    const [ getAlumnos, status, alumnos, error ] = useApi.get('/alumnos');

    useEffect(function () {
        getAlumnos();
    }, [getAlumnos]);

    if (status !== 'completed') {
        return null;
    }

    if (error) {
        console.log(error);
    }

    return (
        <>
            <div className={styles['section']}>
                <h2>Lista de alumnos</h2>

                <div className={styles['page-container']}>
                    <AlumnosTable alumnos={alumnos} />
                </div>
            </div>
        </>
    );
}

export default Home;
