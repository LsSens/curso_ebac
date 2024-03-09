$(document).ready(function() {

    $('form').on('submit', function(e){
        e.preventDefault()
        inputTarefa = $('#input-tarefa').val()
        const conteudo = `<li>${inputTarefa} <img src="./img/x.png" alt=""></li>`
    
        $(conteudo).appendTo('ul')

        $('#input-tarefa').val('')
    })

    $('ul').on('click', 'li', function(){
        $(this).toggleClass('tarefa-feita');
    })

    $('ul').on('click', 'img', function(){
        $(this).parent().remove()
    })
})
