
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

let botonEncriptar = document.querySelector(".boton__encriptar");
let botonDesencriptar = document.querySelector(".boton__desencriptar");
let botonCopiar = document.querySelector(".boton__copiar")
let textoIngresado = document.querySelector(".texto__input");
let textoMostrado = document.querySelector(".texto__output");

// validando el texto ingresado

function textoValido(){
    let textoAValidar = textoIngresado.value.toLowerCase();
    if (textoAValidar==""){
        return false;
    }else if (textoAValidar.includes("á")||textoAValidar.includes("é")||textoAValidar.includes("í")||textoAValidar.includes("ó")||textoAValidar.includes("ú")){
        return false;
    }else{
        return true;
    }
}

function encriptar(){
    let textoAEncriptar = textoIngresado.value.toLowerCase();

    textoAEncriptar = textoAEncriptar.replace(/e/g,"enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g,"ober").replace(/u/g,"ufat");

    textoMostrado.value = textoAEncriptar
}

function desencriptar(){
    let textoADesencriptar = textoIngresado.value.toLowerCase();

    textoADesencriptar = textoADesencriptar.replace(/enter/g,"e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g,"o").replace(/ufat/g,"u");

    textoMostrado.value = textoADesencriptar
}

botonEncriptar.addEventListener("click", function(){
    
    if (textoValido()){
        encriptar()
    }else{
        alert("ingrese un texto valido: el campo de texto no puede estar vacio ni contener caracteres especiales")
    }
    textoIngresado.value = ""
});

botonDesencriptar.addEventListener("click", function(){
    if (textoValido()){
        desencriptar()
    }else{
        alert("ingrese un texto valido")
    }
    textoIngresado.value = ""
});

botonCopiar.addEventListener("click", function(){
    let textoACopiar = document.getElementById("texto__output")
    navigator.clipboard.writeText(textoACopiar.value)
    textoACopiar.value = ""
});