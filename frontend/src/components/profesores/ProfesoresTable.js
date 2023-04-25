import LinkButton from 'components/shared/LinkButton';

import Table from 'components/shared/Table';


const columns = [
    { field: 'no_empleado', name: 'No. de empleado' },
    { field: 'nombre', name: 'Nombre' },
    { field: 'carrera', name: 'Carrera' },
    { field: 'telefono', name: 'Teléfono' },
    { field: 'options', name: '' }
];

function ProfesoresTable(props) {
    const profesores = props.profesores.map(function (profesor) {
        profesor.key = profesor.id;

        profesor.options = (
            <LinkButton
                color="secondary"
                size="small"
                variant="rounded"
                to={`profesores/${profesor.id}`}
            >
                Ver detalles
            </LinkButton>
        );

        return profesor;
    });

    return (
        <Table columns={columns} rows={profesores} />
    );
}

export default ProfesoresTable;
