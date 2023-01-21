function cuidadoConElConsoleLog(nombre){
    console.log(nombre);
    return nombre;
}

function otraFunction(){
    "El nombre retornado por la funcion 'cuidadoConElConsoleLog' es:"+cuidadoConElConsoleLog("Llll")
}

function cuidadoConElReturn(nombre){
    return nombre;
    console.log(nombre);
}