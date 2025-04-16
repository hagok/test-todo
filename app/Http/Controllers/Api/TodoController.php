<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTodoRequest;
use App\Http\Requests\UpdateTodoRequest;
use App\Http\Resources\Api\TodoResource;
use App\Models\Todo;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return TodoResource::collection(Todo::all());//Todo::paginate(15);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTodoRequest $request)
    {
        return response()->json([
            'message' => (Todo::create($request->all())) ? 'Задача успешно добавлена': 'Ошибка выполнения'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Todo $todo)
    {
        return new TodoResource($todo);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTodoRequest $request, Todo $todo)
    {
        return response()->json([
            'message' => ($todo->update($request->all())) ? 'Задача успешно обновлена': 'Ошибка выполнения'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Todo $todo)
    {
        return response()->json([
            'message' => ($todo->delete()) ? 'Задача успешно удалена': 'Ошибка выполнения'
        ]);
    }
}
