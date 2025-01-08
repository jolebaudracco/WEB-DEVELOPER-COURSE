// código del segundo botón 

const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log('You clicked me!')
    console.log('I hope it worked!')
}

function scream () {
    console.log('AHHHH!')
    console.log('STOP TOUCHING ME!')
}

btn.onmouseenter = scream;

//Siempre que uso un "onclick" debo seguirlo de una function
document.querySelector('h1').onclick = function () {
    alert('you clicked the h1!')
}

//empieza el tercer botón
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function(){
    alert('clicked')
})

function twist(){
    console.log('TWIST')
}

function shout() {
    console.log('SHOUT')
}

const tasButton = document.querySelector('#tas');
// tasButton.onclick = twist;
// tasButton.onclick = shout;
//No podemos hacerlo de esta forma ya que uno pisaría al otro

//Sí podemos hacerlo de la siguiente manera:
tasButton.addEventListener('click', twist, {once: true})
tasButton.addEventListener('click', shout)