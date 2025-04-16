<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ToDo</title>

    <link href="{{ asset("css/app.css") }}" rel="stylesheet" />
    <script src="{{ asset("js/app.js") }}" ></script>

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
    <tbody id="bodyToDo">


    @foreach($arr as $arra)
        <tr>
            <th>
                <input type="checkbox" value="" checked>
            </th>
            <td>Mark</td>
            <td>
                <button type="button" class="btn btn-edit">Изменить</button>
                <button type="button" class="btn btn-delete">Удалить</button>
            </td>
        </tr>
    @endforeach


    </tbody>
</table>

<button type="button" class="btn btn-add">Добавить</button>


</body>
</html>
