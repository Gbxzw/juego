
let numeroaadivinar=numerosecreto();
console.log(numeroaadivinar);
let intentos=1;
let listanumeros = [];
let numeromax=10;

mensajes();


function intentodeusuario(){
    let numerodeusuario=parseInt(document.getElementById('usuario').value);
    console.log(typeof(numerodeusuario));
    console.log(typeof(numeroaadivinar));
    console.log(numerodeusuario);
    console.log(numerodeusuario==numeroaadivinar);
    console.log(intentos);
    //los triples === es para comparar no solo el dato sino que también sean del mismo tipo
    if(numerodeusuario===numeroaadivinar){
        asignartexto('p', `¡Acertaste el número! en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numerodeusuario<numeroaadivinar){
            asignartexto('p','El número secreto es mayor');
            intentos++;
            limpiar();
        }else{
            asignartexto('p','El número secreto es menor');
            intentos++;
            limpiar();
        }
    }
    return;
}
function limpiar(){
    let valorCaja=document.getElementById('usuario');
    valorCaja.value='';
}

function asignartexto(elemento,texto){
    let titulo=document.querySelector(elemento);  //el document es para llamar las variables que estan en el html

    //objetos???
titulo.innerHTML=texto;
}

function mensajes(){
asignartexto('h1','JUEGO DEL NÚMERO SECRETO');
asignartexto('p','Escoge un numero del 1 al 10');
numeroaadivinar=numerosecreto();
intentos=1;

}

function numerosecreto() {

    let numeroGenerado = Math.floor(Math.random() * 10) + 1;
    console.log(listanumeros);

    // Check if the number is already in the list
    if (listanumeros.includes(numeroGenerado)) {
        // If it is, call the function again to generate a new number
        return numerosecreto();
    } else {
        // If it's not, add the number to the list and return it
        listanumeros.push(numeroGenerado);
        return numeroGenerado;
    }
}


function reiniciarjuego(){
    //limpiar caja
    limpiar();
    //condiciones iniciales
    mensajes();

    document.getElementById('reiniciar').setAttribute('disabled', true);
 
 
}