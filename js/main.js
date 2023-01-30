//vinculado

console.log("aqui estoy ")

//BOTON SUBIR ARRIBA 

document.getElementById("topBtn").addEventListener("click", function(){
    document.documentElement.scrollTop=0;
}
);


window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ){
        document.getElementById("topBtn").style.display= "block";
    }
    else{
        document.getElementById("topBtn").style.display="none";
    }   
}

//NAVBAR






//VENTANA MODAL-blackout

let cerrar;
let abrir = document.querySelectorAll(".cta");
let modal;
let modalC;


console.log(abrir);


for (let index = 0; index < abrir.length; index++) {
    modales(index);
}

function modales(index) {
    abrir[index].addEventListener("click", function (e) {
        e.preventDefault();
        cerrar = document.querySelectorAll(".close")[index];
        modalC = document.querySelectorAll(".modal-container")[index];
        modalC.style.opacity = "1";
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
        console.log(index);
    });

}

