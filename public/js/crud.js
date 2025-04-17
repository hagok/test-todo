let BASE_URL = "/api/todos";
var pageNow = 1;
function onRead(page = 1) {
    pageNow = page;
    $.ajax({
        url: BASE_URL+'?page='+page,
        method: 'GET',
        success: function(response) {
            $('#bodyToDo').html('');
            $('#loadTmpl').tmpl(response.data).appendTo('#bodyToDo');

            $('.paginate').html('');
            $.each(response.meta.links, function(index, value) {
                if(index!=0 && index!=response.meta.links.length-1){
                    if(pageNow==value.label){
                        $('.paginate').append('<button type="button" class="btn btn-paginate-check" onclick="onRead(page = '+value.label+')">'+value.label+'</button>')
                    } else {
                        $('.paginate').append('<button type="button" class="btn btn-paginate" onclick="onRead(page = '+value.label+')">'+value.label+'</button>')
                    }
                }
            });

            loadBtnTodo();
        },
        error: function(xhr, status, error) {
            notification(error.message, "error");
        }
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
            onRead(pageNow);
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
            onRead(pageNow);
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
            onRead(pageNow);
            notification(response.message, "success");
        },
        error: function(xhr, status, error) {
            notification(error.message, "error");
        }
    });
}
