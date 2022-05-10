//Primero guardamos el boton en una variable
var button_accionar = document.getElementById('esconder_aparecer');

var button_accionar_imagen = document.getElementById('esconder_aparecer_imagen');

button_accionar.addEventListener('click', function() {
    
    var div_a_esconder = document.getElementById('texto_esconder');

    if (div_a_esconder.style.display == 'none') {
        div_a_esconder.style.display = 'block';
    }else{
        div_a_esconder.style.display = 'none';
    }

})

button_accionar_imagen.addEventListener ('click', function() {
    var div_a_esconder_imagen = document.getElementById('imagen_esconder');

    if (div_a_esconder_imagen.style.display == 'none') {
        div_a_esconder_imagen.style.display = 'block';
    }else{
        div_a_esconder_imagen.style.display = 'none';
    }
})