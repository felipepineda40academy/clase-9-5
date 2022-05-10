

//1. Primero, guardo el boton en una variable
var button_aparecer_desaparecer = document.getElementById('esconder_aparecer')

//2. Segundo, agrego un escuchador a ese boton

button_aparecer_desaparecer.addEventListener('click', function (){
    console.log('por aqui!')
    var img = document.getElementById('esconder');

    if (img.style.display === "none"){
        img.style.display = 'block';
    }else {
        img.style.display = "none";
    }

    
})
