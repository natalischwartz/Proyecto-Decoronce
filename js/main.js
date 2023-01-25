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

let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modall")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

console.log(document.querySelectorAll(".cta"));

abrir.addEventListener("click", function (e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");
    
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    },850);

});

window.addEventListener("click", function(e){
    console.log(e.target);
    if(e.target == modalC){
        modal.classList.toggle("modal-close");
    
        setTimeout(function(){
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        },850);
    
    };
});