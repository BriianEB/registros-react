import { useState } from 'react';

import Button from 'components/shared/Button';
//import usePageTitle from 'hooks/usePageTitle';

import styles from './styles.module.scss';


const colores = [
    '#C23F61', '#C23F9E', '#9C3FC2', '#7D3FC2', '#3F4BC2', '#40C7D7',
    '#3FC296', '#3FC245', '#CED740', '#D7A040'
];

function Color() {
    //usePageTitle('Color');

    const [currentColor, setCurrentColor] = useState(getRandomColor());

    function getRandomColor() {
        var random_num = Math.floor(Math.random() * colores.length);

        return colores[random_num];
    }

    function changeColor() {
        setCurrentColor(getRandomColor());
    }

    return (
        <div className={styles['section-color']}>
            <h2>Color al azar</h2>

            <Button onClick={changeColor} color="primary" size="large">
                Cambiar color
            </Button>

            <div
                className={styles['color-container']}
                style={{backgroundColor: currentColor}}
            >
            </div>
        </div>
    );
}

export default Color;
