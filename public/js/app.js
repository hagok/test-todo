
let BASE_URL = "/api/todos";
$(document).ready(function() {
    loadTableTodo();

    $('#add').click(function() {
        $('#title').val('');
        $('#title').attr('');
        $('#add-done').show();
        $('#edit-done').hide();
        $("#modal").fadeIn(500);
    });
    $('#add-done').click(function() {
        let title = $('#title').val();
        $.ajax({
            url: BASE_URL,
            method: 'POST',
            data: {
                title: title
            },
            success: function(response) {
                loadTableTodo();
                $("#modal").fadeOut(500);
                $('#title').val('');
                notification(response.message, "success");
            },
            error: function(xhr, status, error) {
                $("#modal").fadeOut(500);
                notification(error.message, "error");
            }
        });
    });
    $('#close-modal').click(function() {
        $("#modal").fadeOut(500)
    });
});

function loadTableTodo() {
    $.get( BASE_URL, { name: "John", time: "2pm" } )
    .done(function(json) {
        $('#bodyToDo').html('');
        $('#movieTmpl').tmpl(json.data).appendTo('#bodyToDo');
        loadBtnTodo();
    });
}

function loadBtnTodo() {
    $('.checkbox').click(function() {
        let checked = ($(this).is(':checked')) ? 1 : 0;
        let id = $(this).attr('data-id');
        $.ajax({
            url: BASE_URL+'/'+id,
            method: 'PUT',
            data: {
                checked: checked
            },
            success: function(response) {},
            error: function(xhr, status, error) {}
        });
    });

    $('.btn-edit').click(function() {
        $('#title').val($(this).attr('data-title'));
        $('#title').attr('data-id', $(this).attr('data-id'));
        $('#edit-done').show();
        $('#add-done').hide();
        $("#modal").fadeIn(500);
    });

    $('#edit-done').click(function() {
        let id = $('#title').attr('data-id');
        let title = $('#title').val();
        $.ajax({
            url: BASE_URL+'/'+id,
            method: 'PUT',
            data: {
                title: title
            },
            success: function(response) {
                loadTableTodo();
                $("#modal").fadeOut(500);
                notification(response.message, "success");
            },
            error: function(xhr, status, error) {
                notification(error.message, "error");
            }
        });
    });

    $('.btn-delete').click(function() {
        let id = $(this).attr('data-id');
        $.ajax({
            url: BASE_URL+'/'+id,
            method: 'DELETE',
            success: function(response) {
                loadTableTodo();
                notification(response.message, "success");
            },
            error: function(xhr, status, error) {
                notification(error.message, "error");
            }
        });
    });
}

function notification(response, status){
    $('#notification').html(response).fadeIn(1000);
    setTimeout(function() {
        $("#notification").fadeOut(1000);
    }, 3000);
}
