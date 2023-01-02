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





//BOTONES CATEGORIAS

