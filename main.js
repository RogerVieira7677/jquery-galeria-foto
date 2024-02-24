$(document).ready(function(){//Chamando o JQuery
    /* console.log(document.querySelector('header button'));
    console.log($('header button'));*/


    $('header button').click(function(){
        $('form').slideDown();
    })
    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })


    $('form').on('submit', function(e) {
    e.preventDefault();
    const enderecoDaNovaImagem = $('#endereço-imagem-nova').val();
    // console.log(enderecoDaNovaImagem); 
    const novoItem = $('<li style="display:none"></li>');
    $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
    $(`
        <div class="overlay-imagem-link">
        <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
            Ver imagem em tamanho real
        </a>
        </div>
    `).appendTo(novoItem); 
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(1000);
    $('#endereço-imagem-nova').val('');
})
})