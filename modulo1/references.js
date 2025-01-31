// la variable const bloquea la modificacion de su valor ya sea en variables declaradas o en variables globales


//El Objecto const se puede modificar

//En el caso de tipos complejos (es decir, matrices y objetos), las variables y constantes (las palabras clave var, let, const) no contienen todo el objeto. Solo contienen la referencia del objeto. En aras de la simplicidad, podemos imaginar la referencia como una dirección que indica dónde se almacena realmente el objeto.

//Por lo tanto, la palabra clave const solo protege la referencia, la dirección, del cambio. No podemos cambiar la referencia, por ejemplo, reemplazando el objeto (el nuevo objeto tiene una dirección diferente). Sin embargo, los cambios dentro de un objeto: agregar una nueva propiedad, cambiar un valor, etc. no afectan a la referencia.


const contacto= {};

contacto.name = "Andres";
console.log(contacto.name);

contacto.name = "Jose";
console.log(contacto.name);

delete contacto.name;
console.log(contacto.name);


//comparacion de objetos

var point1 = {x:10, y:20};
var point2= {x:10, y:20};
console.log(point1===point2); //falso, ya que esta comprando la dirección de memoria


//aca en ambas variables hay una referencia al mismo objeto
let point3 = point1;
console.log(point1===point3);

point3.z = 40;
console.log(point3.z); //40
console.log(point1.z); //40
console.log(point2.z); //undefined
//se le asigno una variable a point 3, pero como tiene la misma dirección de memoria, tambien se le asigna a point1
//en el caso de point2, no se le asigna a point1, porque tiene una dirección diferente




//copying objects (copying references(), cloning, merging)
//crearemos dos objetos vacios y luego usando object.assign() ampliaremos el primero con los valores de los segundos

let point0 = {x:10, y:20};
let point4 = point0; //copiamos la referencia
let point5 = {};
Object.assign(point5, point0); //copiamos el contenido de point1 a point2
console.log(point5.x);
console.log(point5.y);
console.log(point4 === point0); //true
console.log(point4 === point5); //false



//otro ejemplo
let circle1 = {
    radius: 100,
    centro: {
        x:100,
        y:100
    }};
    let circle2 = {...circle1};
    circle1.radius = 200;
    circle1.centro.x = 200;
    console.log(circle1.radius);
    console.log(circle1.centro.x);
    console.log(circle1 === circle2);
    console.log(circle1.centro === centro);