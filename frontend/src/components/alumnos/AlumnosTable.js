import LinkButton from 'components/UI/LinkButton';

import Table from 'components/UI/Table';


const columns = [
    { field: 'matricula', name: 'Matrícula' },
    { field: 'nombre', name: 'Nombre' },
    { field: 'carrera', name: 'Carrera' },
    { field: 'email', name: 'Correo electrónico' },
    { field: 'telefono', name: 'Teléfono' },
    { field: 'options', name: '' }
];

function AlumnosTable(props) {
    const alumnos = props.alumnos.map(function (alumno) {
        alumno.key = alumno.id;

        alumno.options = (
            <LinkButton
                color="secondary"
                size="small"
                variant="rounded"
                to={`alumnos/${alumno.id}`}
            >
                Ver detalles
            </LinkButton>
        );

        return alumno;
    });

    return (
        <Table columns={columns} rows={alumnos} />
    );
}

export default AlumnosTable;
