import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useApi from 'hooks/useApi';
import Details from 'components/shared/Details';


function ProfesorDetails() {
    const params = useParams();
    const profesorId = params.id;

    const [ getProfesor, status, profesor, error ] = useApi.get(`/profesores/${profesorId}`);

    useEffect(function () {
        getProfesor();
    }, [getProfesor]);

    if (status !== 'completed') {
        return null;
    }

    if (error) {
        console.log(error);
    }

    const profesorData = [
        profesor.no_empleado,
        profesor.nombre,
        profesor.carrera,
        profesor.telefono
    ];

    return (
        <Details title="Detalles del profesor" data={profesorData} />
    );
}

export default ProfesorDetails;
