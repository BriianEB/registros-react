import { useNavigate } from 'react-router-dom';

import CreateAlumnoForm from 'components/alumnos/CreateAlumnoForm';


function CreateAlumno() {
    const navigate = useNavigate();

    function onCreateHandler() {
        navigate('/');
    }

    return (
        <>
            <div className="form-title">
                <h1>Agregar un alumno</h1>
            </div>

            <div className="form-container">
                <CreateAlumnoForm onCreate={onCreateHandler} />
            </div>
        </>
    );
}

export default CreateAlumno;
