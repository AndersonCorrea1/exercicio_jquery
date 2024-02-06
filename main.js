$(document).ready(function() {
    $('#tarefa-form').submit(function(event) {
        event.preventDefault();
        var nomeTarefa = $('#nome-tarefa').val();
        if (nomeTarefa.trim() !== '') {
            var listItem = $('<li><span class="tarefa-texto">' + nomeTarefa + '</span></li>');
            var botoesContainer = $('<div class="botoes-container"></div>');
            var concluidoButton = $('<button class="concluir-tarefa btn-concluir"></button>');
            var deleteButton = $('<button class="apagar-tarefa btn-apagar"></button>');

            listItem.append(botoesContainer);
            botoesContainer.append(concluidoButton, deleteButton);
            $('#lista-tarefa').append(listItem);
            $('#nome-tarefa').val('');
        }
    });

    $('#lista-tarefa').on('click', '.concluir-tarefa', function() {
        var textoTarefa = $(this).closest('li').find('.tarefa-texto');
        textoTarefa.toggleClass('tarefa-concluida');
    });

    $('#lista-tarefa').on('click', '.apagar-tarefa', function() {
        $(this).closest('li').remove();
    });

    $('#apagar-todas-tarefas').click(function() {
        $('#lista-tarefa').empty();
    });

    $('#ocultar-itens').click(function() {
        $('#lista-tarefa').slideToggle();
    });
});
