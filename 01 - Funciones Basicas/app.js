//Ejercicio 1 : Saludo
function saludo(nombre) {
    return `Hola ${nombre}`;
}
console.log(saludo("Juan"));

//Ejercicio 2 : Suma de dos numeros

function sumar(num1,num2){
    return num1+num2;
}
console.log("El resultado de la suma es: ",sumar(5, 10));

//ejercicio 3 : Es Par?
function esPar(numero){
    if(numero%2 ==0){
        return true;
    }
    return false

}
console.log(esPar(5));

//Ejercicio 4 : Longitud de un string
function obtenerLongitud(string){
    console.log("la longitud de la palabra que se ingreso es:", string.length);
    return

}
obtenerLongitud("hola");

//Ejercicio 5: Contar Vocales
function contarVocales(palabra){
    let vocales = "aeiouAEIOU";
    cuenta = 0;
    for (let i=0; i< palabra.length; i++){
        if(vocales.includes(palabra[i])){
            cuenta++;
        }
        
    }
    return cuenta;
}

contarVocales("perro");