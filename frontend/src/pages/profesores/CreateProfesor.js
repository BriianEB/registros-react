import { useNavigate } from 'react-router-dom';

import CreateProfesorForm from 'components/profesores/CreateProfesorForm';


function CreateProfesor() {
    const navigate = useNavigate();

    function onCreateHandler() {
        navigate('/');
    }

    return (
        <>
            <div className="form-title">
                <h1>Agregar un profesor</h1>
            </div>

            <div className="form-container">
                <CreateProfesorForm onCreate={onCreateHandler} />
            </div>
        </>
    );
}

export default CreateProfesor;
