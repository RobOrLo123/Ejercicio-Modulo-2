function sonIguales(x, y){
    if (x === y){
        return true;
    }else{
        return false;
    }
}

function tienenMismaLongitud(str1, str2){
    if (str1.length == str2.length){
        return true;
    }else{
        return false;
    }
}

function menosQueNoventa(num){
    if (num < 90){
        return true;
    }else{
        return false;
    }
}

function mayorQueCincuenta(num){
    if (num > 50){
        return true;
    }else{
        return false;
    }
}

function esPar(num){
    if (num % 2 == 0){
        return true;
    }else{
        return false;
    }
}

function esImpar(num){
    if (num % 2 != 0){
        return true;
    }else{
        return false;
    }
}

module.exports = {
    tienenMismaLongitud,
    sonIguales,
    menosQueNoventa,
    mayorQueCincuenta,
    esPar,
    esImpar,
 };


console.log(sonIguales(10, 10));
console.log(sonIguales(10, 5));

console.log(tienenMismaLongitud("lol", "lol"));
console.log(tienenMismaLongitud("lol1", "lol"));

console.log(menosQueNoventa(91));
console.log(menosQueNoventa(21));

console.log(mayorQueCincuenta(55));
console.log(mayorQueCincuenta(22));

console.log(esPar(2));
console.log(esPar(5));

console.log(esImpar(3));
console.log(esImpar(2));