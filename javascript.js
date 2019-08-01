/**
 * Subir todo el trabajo en un branch nuevo y pushearlo a un repo en GitHub 
 * 
 * 1) Hacer una etiqueta <a> en HTMl
 * 2) Agarrarla con JS
 * 3) Asignarle un evento de "click"
 * 4) El callback del click tiene que poder crear un elemento <p> y dos <button>, todo adentro de un <div> (Se crean con JS)
 * 5) El <p> tiene que decir "Esta seguro que quiere abandonar la página" y los botones "aceptar" y "cancelar", respectivamente
 * 6) Si se hace click en aceptar , se tiene que redirigir al usuario al href del <a>
 * 7) Si se hace click en cancelar, se tiene que borrar el mensaje 
 * 
 * 
 */




//Creamos las variables
var a = document.querySelector("a");
var div = document.createElement("div");
var aceptar = document.createElement("button");
var cancelar = document.createElement("button");
var p = document.createElement("p");


// obtenemos el evento y desactivamos el href del elemento "a", tambien agregamos un div con una etiqueta p y dos botones al body
a.addEventListener("click", e => {
    e.preventDefault();
    div.appendChild(p);
    div.appendChild(aceptar);
    div.appendChild(cancelar);
    p.innerText = "Esta seguro que quiere abandonar la página"
    aceptar.innerText = "aceptar";
    cancelar.innerText = "cancelar";
    aceptar.id = "aceptar";
    cancelar.id = "cancelar";
    document.body.appendChild(div);



});



//Interactuamos con los botones "aceptar" y "cancelar"
document.body.addEventListener("click", e => {
    if (e.target.id == "aceptar") {
        window.location.href = a.href;
    } else {

        if (e.target.id == "cancelar") {
            div.removeChild(p);
            div.removeChild(aceptar);
            div.removeChild(cancelar);
            document.body.removeChild(div);

        }

    }
});