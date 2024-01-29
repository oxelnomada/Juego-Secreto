let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elemntohtml = document.querySelector(elemento);
    elemntohtml.innerHTML = texto;
}

function verificarIntento() {
    let numerousuario = parseInt(document.getElementById("valorUsuario").value);
        if (numeroSecreto === numerousuario) {
            asignarTextoElemento(`p`,`correcto,el numero secreto es ${numeroSecreto} lo lograste en  ${intentos} ${(intentos===1) ? `intento` : `intentos`} `);
            document.getElementById("reiniciar").removeAttribute("disabled"); 
            
        } else {
            if (numerousuario>numeroSecreto) {
                asignarTextoElemento("p","el numero es menor ");
                
            }else {
                asignarTextoElemento("p","el numero es mayor ");
            }
            intentos++;
            limpiarCaja();
        }
        return;
    
}
      
function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
    
    
}

function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento(`p`,`ya se sorteron todos los numeros`);
    } else{

        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function condicionesIniciales() {
    asignarTextoElemento("h1","El Juego Del Numero Secreto¡");
    asignarTextoElemento(`p`,`ingresa un numero entre 1 y ${numeroMaximo} `);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;    
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio
    //generar el numero aleatoreo
    // borra el numero de intentos
    condicionesIniciales();
    //desabilitar el boton nuevo juego 
    document.querySelector(`#reiniciar`).setAttribute("disabled","true");
    
}

condicionesIniciales();