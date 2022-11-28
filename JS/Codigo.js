const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
}

btnRight.addEventListener('click', function () {
    Next();
});

btnLeft.addEventListener('click', function () {
    Prev();
});

setInterval(function () {
    Next();
}, 5000);



function validar() {
    var nombreCompleto = document.getElementById("nombre").value.trim();
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var comentario = document.getElementById("comentario").value;
    const alertasP = document.getElementById("alertaID");
    expresionNombre= /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
    expresionCorreo =/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let alertas = "";
    alertasP.innerHTML = "";
    if (nombreCompleto === "" || correo === "" || telefono === "" || comentario === "") {
        alertas+= "Debe completar todo los campos<br>"; 
        let p = document.createElement("p");
        p.innerHTML = alertas;
        alertasP.appendChild(p);
        return false;
    }
    else if(!expresionNombre.test(nombreCompleto)) {
        alertas+= "El nombre ingresado no es valido<br>";
        let p = document.createElement("p");
        p.innerHTML = alertas;
        alertasP.appendChild(p);
        return false;
    }
    else if (nombreCompleto.length < 3) {
        alertas+= "el nombre es muy corto<br>";
        let p = document.createElement("p");
        p.innerHTML = alertas;
        alertasP.appendChild(p);
        return false;
    }
    else if (nombreCompleto.length > 30) {
        alertas+= "el nombre es muy largo<br>";
        let p = document.createElement("p");
        p.innerHTML = alertas;
        alertasP.appendChild(p);
        return false;
    }
    else if (!expresionCorreo.test(correo)) {
        alertas+= "El correo ingresado no es valido<br>";
        let p = document.createElement("p");
        p.innerHTML = alertas;
        alertasP.appendChild(p);
        return false;
    }
    else if (isNaN(telefono)==true) {
        alertas+= "El telefono ingresado no es un numero<br>";
        let p = document.createElement("p");
        p.innerHTML = alertas;
        alertasP.appendChild(p);
        return false;
    }
    else if (telefono.length < 8) {
        alertas+= "el telefono es muy corto<br>";
        let p = document.createElement("p");
        p.innerHTML = alertas;
        alertasP.appendChild(p);
        return false;
    }
    else if (telefono.length > 25) {
        alertas+= "el telefono es muy largo<br>";
            let p = document.createElement("p");
            p.innerHTML = alertas;
            alertasP.appendChild(p);
        return false;
    }
    return true;
}


function confirmarEnvio() {
    let alertas="";
    
    if(validar()) {

        if(confirm("¿Esta seguro que desea enviar?")){
        alertasP = document.getElementById("alertaID");
        nombreCompleto = document.getElementById("nombre").value;
        correo = document.getElementById("correo").value;
        telefono = document.getElementById("telefono").value;
        comentario = document.getElementById("comentario").value;
            alertas+="Usuario: "+nombreCompleto+"<br>";
            alertas+="Mail: "+correo+"<br>";
            alertas+="Telefono: "+telefono+"<br>";
            alertas+="Comentario: "+comentario+"<br>";
            let p = document.createElement("p");
            p.innerHTML = alertas;
            alertasP.appendChild(p);
        }
}}