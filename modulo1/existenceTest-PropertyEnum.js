//Puede suceder que queramos comprobar si hay una propiedad con un nombre específico en nuestras instalaciones
let contact = {
    name: "Andres",
    email: "andresaviles27@icloud.com",
    phone: "62412024",
    notes: "Algo realmente importante"
};
// if(contact.name){
//     console.log(contact.name);
// };

// if(!contact.notes){
//     contact.notes = "Algo realmente importante";
//     console.log(contact.notes);
// }

// prueba de existencia de propiedad usando "IN"
if("notes" in contact){
    console.log(contact.notes);
}


//Emumeracion for ... in
//Usando for... in podemos revisar las propiedades de un objeto(con algunas limiticaciones ). Pasamos por los nombres de las propiedades 

let contact1 = {
    telefono: "62412024",
    email: "andresaviles27@icloud.com",
    nombre: "Andres",
};

for(x in contact1){
    console.log(x);
}

//los nombres de todas las propiedades del objecto contacto se asigna a la variable x
//para llegar al valor de un campo dado, usamos la notaciones de corchetes(la clave se calcula dinamicamente) y se coloca en la variable, por lo que no podemos usar la notacion de puntos
console.log(`\n`+'Ver las los valores de las propiedades');
for(x in contact1){
    console.log(contact1[x]);
};

//si nos gustaria mostar el nombre, el tipo y valor de todas las propiedades, podriamos escribirlo de la siguiente manera

for(x in contact1){
    //imprimir nombre de la propiedad, tipo y valor
    console.log(`${x}: ${typeof contact1[x]} ${contact1[x]}`);
}



//metodo object.keys
//otra forma de obtener los nombres de las propiedades de un objeto es el metodo object.keys
//este metodo devuelve la matriz de nombres de propiedades, que podemos usar de cualquier manera

let keys = Object.keys(contact1);
console.log(keys);