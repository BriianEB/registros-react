from flask import Blueprint, request
from sqlalchemy.exc import NoResultFound
from werkzeug.exceptions import NotFound

from database import db
from exceptions import ValidationError
from models import Alumno
import utils.validations as validation


alumnos = Blueprint('alumnos', __name__)

@alumnos.route('/alumnos')
def index():
    alumnos = db.session.execute(db.select(Alumno)).scalars()

    return [alumno.to_dict() for alumno in alumnos]

@alumnos.route('/alumnos', methods=['POST'])
def create():    
    data = request.get_json()

    errors = validation.validate(Alumno.validations, data)

    if errors:
        raise ValidationError({'fields': errors})

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
    try:
        alumno = db.session.execute(db.select(Alumno).filter_by(id=id)).scalar_one()
    except NoResultFound:
        raise NotFound()

    return alumno.to_dict()
