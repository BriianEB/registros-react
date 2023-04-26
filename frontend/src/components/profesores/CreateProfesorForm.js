import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import useApi from 'hooks/useApi';
import Button from 'components/shared/Button';
import Input from 'components/shared/Input';


const validations = {
    no_empleado: {
        required: {
            value: true,
            message: 'Debes llenar este campo'
        }
    },
    nombre: {
        required: {
            value: true,
            message: 'Debes llenar este campo'
        }
    },
    carrera: {
        required: {
            value: true,
            message: 'Debes llenar este campo'
        }
    },
    telefono: {
        required: {
            value: true,
            message: 'Debes llenar este campo'
        },
        pattern: {
            value: /^[\d-]+$/,
            message: 'Ingresa un número de teléfono válido'
        }
    }
};

function CreateProfesorForm(props) {
    const { onCreate } = props;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ createProfesor, postStatus, profesor, apiErrors ] = useApi.post('/profesores');

    useEffect(function () {
        if (postStatus === 'completed') {
            onCreate(profesor);
        }
    }, [postStatus, onCreate, profesor]);

    function submitHandler(data) {
        createProfesor(data);
    }

    function getApiErrorField(field) {
        if (postStatus === 'error') {
            if (apiErrors.fields && apiErrors.fields[field]) {
                return apiErrors.fields[field];
            }
        }

        return null;
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <Input
                name="no_empleado"
                label="Número de empleado"
                register={register}
                validations={validations.no_empleado}
                error={errors.no_empleado || getApiErrorField('no_empleado')}
            />

            <Input
                name="nombre"
                label="Nombre"
                register={register}
                validations={validations.nombre}
                error={errors.nombre || getApiErrorField('nombre')}
            />

            <Input
                name="carrera"
                label="Carrera"
                register={register}
                validations={validations.carrera}
                error={errors.carrera || getApiErrorField('carrera')}
            />

            <Input
                name="telefono"
                label="Teléfono"
                register={register}
                validations={validations.telefono}
                error={errors.telefono || getApiErrorField('telefono')}
            />

            <div className="text-right">
                <Button
                    type="submit"
                    color="primary"
                    size="large"
                    disabled={postStatus === 'pending'}
                >
                    Guardar
                </Button>
            </div>
        </form>
    );
}

export default CreateProfesorForm;
