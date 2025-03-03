// alert("Hola");
//confirm("quieres borrar todo?");
//prompt("ingresa tu nombre");

const username = document.getElementById('username');

const password = document.getElementById('password');
const login = () => {

    console.log(username.value, password.value);
    if (username.value === 'AdminLogin' && password.value === 'Password231') {
        sessionStorage.setItem('name', "Ignacio Gonzalez");
        window.location.href = 'pages/home.html';
    } 
    else {
        alert('credenciales incorrectas');
    }

};

const btnlogin = document.getElementById('btnlogin');

btnlogin.addEventListener('click', login);

password.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        login();
    }
});