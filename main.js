var form = document.getElementById('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    var numbera = document.getElementById('numberA')
    var numberb = document.getElementById('numberB')
    var mensagem = document.querySelector('.mensagem')
    if (parseFloat(numberb.value) > parseFloat(numbera.value)){
        mensagem.innerHTML = `O número: ${numbera.value} é menor que o numero: ${numberb.value}`
        mensagem.style = 'color: green;'
    } else {
        mensagem.style = 'color: red;'
        mensagem.innerHTML = `O número: ${numbera.value} é maior ou igual ao numero: ${numberb.value}`
    }
    numberb.value = ''
    numbera.value = ''
})
