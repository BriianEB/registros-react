from flask import Blueprint, request, redirect, abort
from sqlalchemy.exc import NoResultFound
from werkzeug.exceptions import NotFound

import utils.validations as validation
from exceptions import ValidationError
from database import db
from models import Alumno


alumnos = Blueprint('alumnos', __name__)

@alumnos.route('/alumnos')
def index():
    raise ValidationError({'errors': 'asd'})
    alumnos = db.session.execute(db.select(Alumno)).scalars()

    return [alumno.to_dict() for alumno in alumnos]

@alumnos.route('/alumnos/crear', methods=['GET', 'POST'])
def create():
    data = request.get_json()

    errors = validation.validate(Alumno.validations, data)

    if errors:
        abort(400, description={
            'message': 'There were validation errors.',
            'data': errors
        })

    alumno = Alumno(
        matricula=data['matricula'],
        nombre=data['nombre'],
        carrera=data['carrera'],
        email=data['email'],
        telefono=data['telefono'],
    )

    db.session.add(alumno)
    db.session.commit()

    return alumno.to_dict()


@alumnos.route('/alumnos/<id>')
def show(id):
    raise ValidationError({'fields': {'a': 'b'}})
    try:
        alumno = db.session.execute(db.select(Alumno).filter_by(id=id)).scalar_one()
    except NoResultFound:
        raise NotFound()

    return alumno.to_dict()
