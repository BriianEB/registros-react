import os
from datetime import datetime
from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate

from config import config
from database import db
from errors import register_errors_handlers

from controllers import alumnos, profesores
from models import Alumno, Profesor


basedir = os.path.abspath(os.path.dirname(__file__))

migrate = Migrate()

def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])

    db.init_app(app)
    cors = CORS(app, resources={r'*': {'origins': '*'}})
    migrate.init_app(app, db, directory=os.path.join(basedir, 'database/migrations'))

    app.register_blueprint(alumnos)
    app.register_blueprint(profesores)

    register_errors_handlers(app)

    return app

app = create_app(os.environ.get('APP_ENV'))

# templates context
@app.context_processor
def inject_now():
    return {'datetime': datetime}

# shell context
@app.shell_context_processor
def make_shell_context():
    return dict(db=db, Alumno=Alumno, Profesor=Profesor)
