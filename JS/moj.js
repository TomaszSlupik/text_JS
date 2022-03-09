const plus = document.querySelector ('.plus')
const minus = document.querySelector ('.minus')
const paint = document.querySelector ('.paint')
const p = document.querySelector ('p')
const gold = document.querySelector ('.gold')

let fontSize = 26

function bigTekst () {
    fontSize += 5
    p.style.fontSize = fontSize + 'px' 
    
}

function smallTekst () {
    fontSize -= 5
    p.style.fontSize = fontSize + 'px'
}

function colorTekst () {
    p.classList.toggle ('gold')
}

plus.addEventListener('click', bigTekst)
minus.addEventListener ('click', smallTekst)
paint.addEventListener ('click', colorTekst)
