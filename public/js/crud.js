function onRead() {
    $.get( BASE_URL)
        .done(function(json) {
            $('#bodyToDo').html('');
            $('#loadTmpl').tmpl(json.data).appendTo('#bodyToDo');
            loadBtnTodo();
        });
}

function onCreate(title){
    $.ajax({
        url: BASE_URL,
        method: 'POST',
        data: {
            title: title
        },
        success: function(response) {
            onRead();
            $("#modal").fadeOut(500);
            $('#title').val('');
            notification(response.message, "success");
        },
        error: function(xhr, status, error) {
            $("#modal").fadeOut(500);
            notification(error.message, "error");
        }
    });
}

function onUpdateChecked(id, checked){
    $.ajax({
        url: BASE_URL+'/'+id,
        method: 'PUT',
        data: {
            checked: checked
        },
        success: function(response) {},
        error: function(xhr, status, error) {}
    });
}

function onUpdateTitle(id, title){
    $.ajax({
        url: BASE_URL+'/'+id,
        method: 'PUT',
        data: {
            title: title
        },
        success: function(response) {
            onRead();
            $("#modal").fadeOut(500);
            notification(response.message, "success");
        },
        error: function(xhr, status, error) {
            notification(error.message, "error");
        }
    });
}

function onDelete(id){
    $.ajax({
        url: BASE_URL+'/'+id,
        method: 'DELETE',
        success: function(response) {
            onRead();
            notification(response.message, "success");
        },
        error: function(xhr, status, error) {
            notification(error.message, "error");
        }
    });
}
