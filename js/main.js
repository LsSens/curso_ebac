$('document').ready(function() {
    $('input[required]').each(function() {
        var label = $('label[for="' + $(this).attr('id') + '"]');
        label.append('<span style="color: red">*</span>');
    });

    const nome = $('#nome');
    const sobrenome = $('#sobrenome');
    const email = $('#email');
    const cpf = $('#cpf');
    const celular = $('#celular');
    const telefone = $('#telefone');
    const cep = $('#cep');
    const endereco = $('#endereco');
    const numero = $('#numero');
    const complemento = $('#complemento');
    const bairro = $('#bairro');
    const cidade = $('#cidade');
    const estado = $('#estado');


    $('#nome, #sobrenome').mask('SSSSSSSSS');
    $('#cpf').mask('000.000.000-00');
    $('#celular').mask('(00) 00000-0000');
    $('#telefone').mask('(00) 0000-0000');
    $('#cep').mask('00000-000');
    $('#estado').mask('SS');

    $('#cep').on('keyup', function(e) {
        var cepnNumber = $('#cep').val().replace(/\D/g, '');

        if(cepnNumber.length == 8) {
            $.getJSON('https://viacep.com.br/ws/' + cepnNumber + '/json/', function(data) {
                if (!("erro" in data)) {
                    endereco.val(data.logradouro);
                    endereco.prop('disabled', true);
                    bairro.val(data.bairro);
                    bairro.prop('disabled', true);
                    cidade.val(data.localidade);
                    cidade.prop('disabled', true);
                    estado.val(data.uf);
                    estado.prop('disabled', true);
                }
            })
        } else {
            endereco.prop('disabled', false);
            bairro.prop('disabled', false);
            cidade.prop('disabled', false);
            estado.prop('disabled', false);
        }
    });

    $('form').on('submit', function(e) {
        e.preventDefault();

        $('form').validate({
            rules: {
                nome: {required: true},
                sobrenome: {required: true},
                email: {required: true, email:true},
                cpf: {required: true, minlength: 11},
                celular: {required: true, minlength: 15},
                telefone: {minlength: 14},
                cep: {required: true, maxlength: 9},
                estado: {required: true},
                cidade: {required: true},
                bairro: {required: true},
                endereco: {required: true}
            }, messages: {
                celular: { minlength: "Por favor, insira pelo menos 11 números." },
                telefone: { minlength: "Por favor, insira pelo menos 10 números." }
            }
        });

        if ($(this).valid()) {
            $('.container').fadeOut(function(){
                $('form').css('display', 'none');
                $('h1').text('Seus dados');
                if ($('#dados').length != 0) {
                    $('#dados').css('display', 'block');
                    $('#dados').find('.nome-sobrenome').text(`${nome.val()} ${sobrenome.val()}`)
                    $('#dados').find('.cpf').text(cpf.val());
                    $('#dados').find('.celular').text(celular.val());
                    $('#dados').find('.email').text(email.val());
                    telefone.val().length != 0 ? $('#dados').find('.telefone').text(telefone.val()) : $('#dados').find('.telefone').text('');
                    $('#dados').find('.confirmacao-endereco p').text(`${endereco.val()}, ${numero.val()}, ${complemento.val().length !=0 ? `${complemento.val()}, ` : ''}${bairro.val()} - ${cidade.val()}/${estado.val()}, ${cep.val()}`);
                } else {
                    let conteudo = `<div id="dados">`;
                    conteudo +=  `<div class="confirmacao-dados">`;
                    conteudo += `<p class="nome-sobrenome" id="start">${nome.val()} ${sobrenome.val()}</p>`;
                    conteudo += `<p class="cpf" id="center">${cpf.val()}</p>`;
                    conteudo += `<p class="celular" id="end">${celular.val()}</p>`;
                    conteudo += `<p class="email" id="start">${email.val()}</p>`;
                    telefone.val().length != 0 ? conteudo += `<p class="telefone" id="end">${telefone.val()}</p>` : `<p class="telefone"  id="end"></p>`;
                    conteudo += `</div>`;
                    conteudo += `<hr>`;
                    conteudo += `<div class="separador-dados-endereco">`;
                    conteudo += `<h2>Endereço</h2>`;
                    conteudo += `</div>`;
                    conteudo += `<div class="confirmacao-endereco">`;
                    conteudo += `<p>${endereco.val()}, ${numero.val()}, ${complemento.val().length !=0 ? `${complemento.val()}, ` : ''}${bairro.val()} - ${cidade.val()}/${estado.val()}, ${cep.val()}</p>`;
                    conteudo += `</div>`;
                    conteudo += `<hr>`;
                    conteudo += `<div class="confirmacao-botoes">`;
                    conteudo += `<button id="alterar-dados" type="button">Alterar dados</button>`;
                    conteudo += `<button id="enviar-dados" type="button">Enviar dados</button>`;
                    conteudo += `</div>`;
                    conteudo += `</div>`;
                    $('.container').append(conteudo);
                }
                $('.container').fadeIn(1000);
            });
        }
    });

    $(document).on('click', '#enviar-dados', function(){
        alert("Dados coletados");
    });

    $(document).on('click', '#alterar-dados', function(){
        $('.container').fadeOut(function() {
            $('h1').text('Cadastro');
            $('#dados').css('display', 'none');
            $('form').css('display', 'flex');
            $('.container').fadeIn(1000);

        });
    });

});