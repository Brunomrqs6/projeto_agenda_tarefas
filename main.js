$(document).ready(function() {

    $('form').submit(function(e){
        e.preventDefault()

        const nomeTarefa = $('input').val();
        const novoItem = $(`<li> </li>`)

       

        $(`<li> ${nomeTarefa} </li>`).appendTo(novoItem)

        $(novoItem).appendTo('ul')
        $('input').val('');

        $('li').click(function (){
            $(this).addClass("riscado");
        })
        })
    })