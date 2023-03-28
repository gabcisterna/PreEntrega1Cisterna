// Mostrar
function mostrarDatos(nombre, saldo){
    alert("Hola " + nombre + " tu saldo es de : $" + saldo)
}

function pedirSaldo(){
    let banderaSaldo = true
    while (banderaSaldo){
        let saldo = parseInt(prompt("Ingrese con cuanto saldo desea empezar: "))
        if (isNaN(saldo) || saldo < 0){
            alert("Tiene que ingresar un numero valido")
        } else{
            return saldo
        }
    }
}

// Opcion 1

// Verifica que la apuesta no sea menor que 0 y que no apueste mas de lo que pueda y que no esriba alguna palabra
function validarApuesta(saldo){
    banderaApuesta = true
    while (banderaApuesta){
        let apuesta = parseInt(prompt("Ingrese la cantidad que desea apostar: "))
        if (apuesta <= 0 || apuesta > saldo || isNaN(apuesta)){
            alert("Apuesta invalida, Ingrese nuevamente la apuesta")
        } else {
            alert("Su apuesta es de : $" + apuesta)
            return apuesta
        }
    }
}

// Verifica que elija una opcion valida entre la 1 y la 2 y que no escriba nada
function validarEleccion(){
    banderaEleccion = true
    while (banderaEleccion){
        let eleccion = parseInt(prompt("Elige a que quieres apostar\nOpcion 1: CARA\nOpcion 2: CRUZ\nIngrese unicamente el número de la opcion"))
        if (eleccion < 1 || eleccion > 2 || isNaN(eleccion)){
            alert("Apuesta invalida, Ingrese nuevamente la apuesta")
        } else {
            return eleccion = convertirPalabras(eleccion)
        }
    }
}

// Da true si son iguales y da false si son distintos
function verificarResultado(eleccion, aleatorio){
    if (aleatorio == eleccion){
        return true
    } else {
        return false
    }
}


function mostrarResultado(resultado, eleccion, aleatorio, apuesta, saldo){
    if (resultado){
        alert("Salio " + aleatorio + " y elegiste " + eleccion + " Felicidades Ganaste!!\nTu apuesta fue de: $" + apuesta + " tu nuvo saldo es: $" + saldo)
    } else {
        alert("Salio " + aleatorio + " y elegiste " + eleccion + " Mala suerte perdiste :(\nTu apuesta fue de: $" + apuesta + " tu nuvo saldo es: $" + saldo)
    }
}

// Convierte el 1 en cara y el 2 en cruz
function convertirPalabras(numero){
    if (numero == 1){
        return "CARA"
    } else {
        return "CRUZ"
    }
}

// Suma o resta el saldo dependiendo del resultado
function resultadoSaldo(apuesta, resultado, saldo){
    if (resultado){
        saldo += apuesta 
    } else {
        saldo -= apuesta
    }
    return saldo
}

// Opcion 2
function agregarSaldo(saldo){
    let nuevoSaldo = parseInt(prompt("Ingrese el monto que quiera agregar al saldo: "))
    return saldo += nuevoSaldo
}

alert("Bienvenido al juego de cara o cruz")
// Programa
let nombre = prompt("Ingrese su nombre: ")
let saldo = pedirSaldo()

mostrarDatos(nombre, saldo)

let op = 0
let bandera = true
while (op != 3){
    while (bandera){
        if (saldo == 0){
            op = parseInt(prompt("Opcion 1: (No valida)\nOpcion 2: Agregar saldo\nOpcion 3: Salir\nIngrese unicamente el número de la opcion"))
            if (op != 1){
                break
            }
        } else {
            op = parseInt(prompt("Opcion 1: Jugar\nOpcion 2: Agregar saldo\nOpcion 3: Salir\nIngrese unicamente el número de la opcion: "))
            break
        }
    }
    switch(op){
        case 1:
            let apuesta = validarApuesta(saldo)
            let eleccion = validarEleccion()
            let aleatorio = convertirPalabras(Math.round(Math.random()))
            let resultado = verificarResultado(eleccion, aleatorio)
            saldo = resultadoSaldo(apuesta, resultado, saldo)
            mostrarResultado(resultado, eleccion, aleatorio, apuesta, saldo)
            break
        case 2:
            saldo = agregarSaldo(saldo)
            alert("Tu nuevo saldo es de : $" + saldo)
            break
        case 3:
            alert("Adios " + nombre + " tu saldo final fue de : $" + saldo)
            break
        default:
            alert("Ingrese una opcion valida :)")
            break
    }
}


