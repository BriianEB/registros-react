from flask import Blueprint, request
from sqlalchemy.exc import NoResultFound
from werkzeug.exceptions import NotFound

from database import db
from exceptions import ValidationError
from models import Profesor
import utils.validations as validation


profesores = Blueprint('profesores', __name__)

@profesores.route('/profesores')
def index():
    profesores = db.session.execute(db.select(Profesor)).scalars()

    return [profesor.to_dict() for profesor in profesores]

@profesores.route('/profesores', methods=['POST'])
def create():    
    data = request.get_json()

    errors = validation.validate(Profesor.validations, data)

    if errors:
        raise ValidationError({'fields': errors})

    profesor = Profesor(
        no_empleado=data['no_empleado'],
        nombre=data['nombre'],
        carrera=data['carrera'],
        telefono=data['telefono']
    )

    db.session.add(profesor)
    db.session.commit()

    return profesor.to_dict()

@profesores.route('/profesores/<id>')
def show(id):
    try:
        profesor = db.session.execute(db.select(Profesor).filter_by(id=id)).scalar_one()
    except NoResultFound:
        raise NotFound()

    return profesor.to_dict()
