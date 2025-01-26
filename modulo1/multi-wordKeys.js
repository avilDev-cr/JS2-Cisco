//cuando la clave son varias palabras
let contact = { 
    "first name": "Andres",
};
contact["first name"] = "jose";
console.log(contact["first name"]);


let contact2 = {
    email_1: "andresaviles27@icloud.com",
    email_2: "andresaviles27@gmail.com"
};
for(i=1; i<=2; i++){
    let key = "email_"+i;
    console.log(key);
    console.log(contact2[key]);
}