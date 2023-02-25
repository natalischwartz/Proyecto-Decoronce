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

//Programando al dar clik a las imagenes, se abre la imagen en grande

const fulImgBox = document.getElementById("fulImgBox"); // es nuestra caja que muestra la foto en el centro
fulImg = document.getElementById("fulImg");


function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference;
}

// el parametro reference, va a referenciar al enlace de la imagen

function closeImg() {
    fulImgBox.style.display = "none";
}

