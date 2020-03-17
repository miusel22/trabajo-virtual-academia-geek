'use strict';

document.getElementById('win1').addEventListener('mouseover',winner1);
document.getElementById('win2').addEventListener('mouseover',winner2);

function winner1(e){    
    document.querySelector('h1').innerHTML='<h1>La Geek Girl seleccionada es: Dubenis</h1>';
    e.preventDefaul();
}

function winner2(e){       
    document.querySelector('h1').innerHTML='<h1>La Geek Girl seleccionada es: Andrea</h1>';
    e.preventDefaul();
}