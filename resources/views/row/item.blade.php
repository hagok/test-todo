<script id="loadTmpl" type="text/x-jquery-tmpl">
    <tr>
        <td><input data-id="${id}" class="checkbox" type="checkbox" ${checked}/></td>
        <td>${title}</td>
        <td>
            <button data-id="${id}" data-title="${title}" type="button" class="btn btn-edit">Изменить</button>
            <button data-id="${id}" type="button" class="btn btn-delete">Удалить</button>
        </td>
    </tr>
</script>
