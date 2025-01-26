let nr = 10;
let b = false;
let str = "uno dos tres";
let arr = [1, 2, 3];
let obj = {
    x: 10,
    y: 20
};
let fn = function (arg) {
    console.log(arg);
};
fn(123);


let test = {
    nr: 10,
    b: false,
    str: "uno dos tres",
    arr: [1, 2, 3],
    obj: {
        x:10,
        y:20
    },
    fcn: function(arg) {console.log(arg)}
};
test.fcn(123);

//niveles de propiedades anidadas
 console.log(test.obj.x)
 test.obj.x = 40;
 console.log(test.obj.x);


 //funcion como tipo de propiedad - metodo
 let point = { 
    x: 0,
    y: 0,
    moveHorizontally: function(distance) {
        this.x = this.x + distance;
    },
    moveVertically: function(distance){
        this.y = this.y + distance;
    }
 }
 console.log('metodos');
 console.log('x= ' +point.x);
 point.moveHorizontally(30);
 console.log('x= '+ point.x);

 //adicion de una nueva propiedad

 let contact = {
    name: "Andres",
    email: "andresaviles27@icloud.com"
 }
contact.email={
    private: "andresaviles27@icloud.com",
    work: "andresaviles27@gmail.com"
}
 contact.tel = "62412024";
 contact.lastName = "Aviles";
 console.log(contact);

 //eliminacion de propiedades
 delete contact.name;
 console.log(contact);