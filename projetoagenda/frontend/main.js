import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Login from '../frontend/modules/Login';

const login = new Login('.form-login');
const cadastro = new Login('.form-register');
login.init();
cadastro.init();


console.log('Hello World!');