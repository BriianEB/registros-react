import CreateAlumnoForm from 'components/alumnos/CreateAlumnoForm';


function CreateAlumno() {
    return (
        <>
            <div className="form-title">
                <h1>Agregar un alumno</h1>
            </div>

            <div className="form-container">
                <CreateAlumnoForm />
            </div>
        </>
    );
}

export default CreateAlumno;
