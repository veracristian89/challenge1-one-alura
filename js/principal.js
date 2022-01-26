
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


var botonEncriptar = document.querySelector(".boton__encriptar");
var botonDesencriptar = document.querySelector(".boton__desencriptar");

function encriptar(){
    var textoIngresado = document.querySelector(".texto__input").value;
    var textoMostrado = document.querySelector(".texto__output");
 
    textoIngresado = textoIngresado.replace(/e/g,"enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g,"ober").replace(/u/g,"ufat");

    textoMostrado.value = textoIngresado

    
}

botonEncriptar.addEventListener("click", encriptar);

function desencriptar(){
    var textoIngresado = document.querySelector(".texto__input").value;
    var textoMostrado = document.querySelector(".texto__output");

    textoIngresado = textoIngresado.replace(/enter/g,"e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g,"o").replace(/ufat/g,"u");

    textoMostrado.value = textoIngresado
    
}

botonDesencriptar.addEventListener("click", desencriptar)
