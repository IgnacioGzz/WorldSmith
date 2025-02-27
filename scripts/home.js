window.onload = () => {
    if(sessionStorage.name){
        const h1 = document.getElementById('h1');

        (h1.innerHtml = "hola"), sessionStorage.name;
    } else {
        window.location = "../index.html";
    }
};
const h1 = document.getElementById('saludo');
h1.innerHTML = "hola " + sessionStorage.name;