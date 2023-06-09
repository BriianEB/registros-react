import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import useApi from 'hooks/useApi';
import Button from 'components/shared/Button';
import Input from 'components/shared/Input';


const validations = {
    matricula: {
        required: {
            value: true,
            message: 'Debes llenar este campo'
        },
        minLength: {
            value: 7,
            message: 'Ingresa un valor de exactamente 7 caracteres'
        },
        maxLength: {
            value: 7,
            message: 'Ingresa un valor de exactamente 7 caracteres'
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
    email: {
        required: {
            value: true,
            message: 'Debes llenar este campo'
        },
        pattern: {
            value: /[\w-]+@[\w]+\.[\w]+/,
            message: 'Ingresa un email válido'
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

function CreateAlumnoForm(props) {
    const { onCreate } = props;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ createAlumno, postStatus, alumno, apiErrors ] = useApi.post('/alumnos');

    useEffect(function () {
        if (postStatus === 'completed') {
            onCreate(alumno);
        }
    }, [postStatus, onCreate, alumno]);

    function submitHandler(data) {
        createAlumno(data);
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
                name="matricula"
                label="Matricula"
                register={register}
                validations={validations.matricula}
                error={errors.matricula || getApiErrorField('matricula')}
            />

            <Input
                name="nombre"
                label="nombre"
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
                name="email"
                label="Correo electrónico"
                register={register}
                validations={validations.email}
                error={errors.email || getApiErrorField('email')}
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

export default CreateAlumnoForm;
