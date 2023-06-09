import styles from './styles.module.scss';


function Table(props) {
    const style = props.variant ? props.variant : 'table';
    const columns = props.columns;
    const rows = props.rows;
    const columns_keys = columns.map((column) => column.field);

    return (
        <table className={styles[style]}>
            <thead>
                <tr>
                    {columns.map(function (column) {
                        return (
                            <th key={column.field}>{column.name}</th>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {rows.map(function (row) {
                    return (
                        <tr key={row.key}>
                            {columns_keys.map(function (column, index) {
                                return (
                                    <td key={index}>{row[column]}</td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Table;
