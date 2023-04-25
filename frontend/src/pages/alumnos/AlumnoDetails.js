import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useApi from 'hooks/useApi';
import Details from 'components/shared/Details';


function AlumnoDetails() {
    const params = useParams();
    const alumnoId = params.id;

    const [ getAlumno, status, alumno, error ] = useApi.get(`/alumnos/${alumnoId}`);

    useEffect(function () {
        getAlumno();
    }, [getAlumno]);

    if (status !== 'completed') {
        return null;
    }

    if (error) {
        console.log(error);
    }

    const alumnoData = [
        alumno.matricula,
        alumno.nombre,
        alumno.carrera,
        alumno.email,
        alumno.telefono
    ];

    return (
        <Details title="Detalles del alumno" data={alumnoData} />
    );
}

export default AlumnoDetails;
