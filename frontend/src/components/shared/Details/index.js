import styles from './styles.module.scss';
import tableStyles from 'components/UI/Table/styles.module.scss';


function Details(props) {
    const { title, data } = props;

    return (
        <>
            <div className={styles['details-title']}>
                <h2>{title}</h2>
            </div>

            <div className={styles['details-container']}>
                <table className={`${tableStyles['table']} w-100`}>
                    <thead className={tableStyles['header-dark']}>
                        <tr>
                            <th>{title}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(function (value, index) {
                            return (
                                <tr key={index}>
                                    <td className="text-light">{value}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Details;
