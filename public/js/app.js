
let BASE_URL = "/api/todos";
$(document).ready(function() {
    onRead();

    $('#add').click(function() {
        $('#title').val('');
        $('#title').attr('');
        $('#add-done').show();
        $('#edit-done').hide();
        $("#modal").fadeIn(500);
    });
    $('#add-done').click(function() {
        let title = $('#title').val();
        onCreate(title);
    });
    $('#close-modal').click(function() {
        $("#modal").fadeOut(500)
    });
});

function loadBtnTodo() {
    $('.checkbox').click(function() {
        let checked = ($(this).is(':checked')) ? 1 : 0;
        let id = $(this).attr('data-id');
        onUpdateChecked(id, checked);
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
        onUpdateTitle(id, title);
    });

    $('.btn-delete').click(function() {
        let id = $(this).attr('data-id');
        onDelete(id);
    });
}

function notification(response, status){
    $('#notification').html(response).fadeIn(1000);
    setTimeout(function() {
        $("#notification").fadeOut(1000);
    }, 3000);
}
