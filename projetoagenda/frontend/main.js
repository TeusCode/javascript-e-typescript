import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Login from '../frontend/modules/Login';
import Contato from '../frontend/modules/Contato';

const login = new Login('.form-login');
const cadastro = new Login('.form-register');
const contato = new Contato('.form-contato');

//Inicia Validações:
contato.init();
login.init();
cadastro.init();

console.log('Hello World!');