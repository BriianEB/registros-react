from flask import Blueprint, render_template, request, redirect, url_for, abort

import utils.validations as validation
from database import db
from models import Alumno, Profesor


profesores = Blueprint('profesores', __name__)

@profesores.route('/profesores/crear', methods=['GET', 'POST'])
def create():
    data = request.form

    errors = validation.validate(Profesor.validations, data)

    if errors:
        pass

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
    except:
        abort(404)

    return profesor.to_dict()
