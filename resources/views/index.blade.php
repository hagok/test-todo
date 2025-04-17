<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ToDo</title>

    <link href="{{ asset("css/app.css") }}" rel="stylesheet" />

</head>
<body>

    <table class="table">
        <thead>
        <tr>
            <th>Выполнение</th>
            <th>Наименование</th>
            <th>Действия</th>
        </tr>
        </thead>
        <tbody id="bodyToDo"></tbody>
    </table>

    <div>
        <div class="paginate"></div>
        <div class="added">
            <button id="add" type="button" class="btn btn-add">Добавить</button>
        </div>
    </div>

    @extends('row.item')
    @extends('row.notification')
    @extends('row.modal')

    <script src="{{ asset("js/jquery.js") }}" ></script>
    <script src="{{ asset("js/jquery.tmpl.js") }}" ></script>
    <script src="{{ asset("js/app.js") }}" ></script>
    <script src="{{ asset("js/crud.js") }}" ></script>
</body>
</html>
