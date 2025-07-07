//Ejercicio 1
function holaMundo(){
    console.log("Hola Mundo!");
   
}

holaMundo();

//ejercicio 2

function saludarPersona(nombre){
    return `Hola ${nombre}!`;

}

let nombre ="joaquin"
console.log(saludarPersona(nombre));

//ejercicio 3

function sumarNumeros(num1 , num2){
    return num1 + num2;
}

console.log(sumarNumeros(15, 20));

//ejercicio 4

function restarNumeros(minuendo, sustraendo){ return minuendo - sustraendo
    
}

restarNumeros(20 , 10)

//ejercicio 5
function multiplicarNumeros(factor1, factor2){return factor1*factor2; }

multiplicarNumeros(10,5)

//Ejercicio 6: División Segura

function dividirNumeros(dividendo, divisor){
    if(divisor != 0){
        return dividendo/divisor
    }
    else{
        return"NO SE PUEDE DIVIDIR POR CEROOO"
    }
}

dividirNumeros(50, 0)


//Ejercicio 7: Retornar Booleano: ¿Es Mayor de Edad?

function esMayorDeEdad(edad){
    if(edad>=18){
        return "usted es mayor ! por lo tanto puede pasar"
    } else{
        return "alto! solo se permiten mayores de edad!"
    }
}

esMayorDeEdad(212);


//Ejercicio 8: Función sin Retorno Explícito (Efecto Colateral) 

function mostrarMensajeConsola(mensaje){
    console.log(mensaje);
}


mostrarMensajeConsola("holaa mensaje de consolaa");

// ejercicio 9 Invocacion de funcion Dentro de Otra Funcion (Basico)

function obtenerNombreCompleto(nombre1, apellido1){
    return `${nombre1} ${apellido1}`  }
    
function presentarDatos(nombre1, apellido1){
    return `la persona es: ` + obtenerNombreCompleto(nombre1,apellido1)
}
nombre1 = "Lucas"
apellido1= "Hamilton"
obtenerNombreCompleto(nombre1,apellido1);

presentarDatos(nombre1, apellido1)


//Ejercicio 10: Cálculo Simple con Valor por Defecto

function calcularAreaCuadrado(lado){
    if(lado == undefined){
        lado = 5;
    }
    else{  
    }
    return lado*lado;
}

calcularAreaCuadrado()