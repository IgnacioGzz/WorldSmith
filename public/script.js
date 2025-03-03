console.log('Hello, world!');
const colores = [ "red", "blue"];
console.log (colores[0]);
colores[0] = 523;

{
let alumno = {
    nombre: "Juan",
    edad: 23,
    imprime () {
        console.log(this.nombre, this.edad);
    },
};
alumno.imprime();
alumno["edad"]++;

function fun2() {
    console.log("hola2");
}
const greet = (name) => {
    console.log("hola", name);}
greet("Juan");

}