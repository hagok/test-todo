<?php

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\TodoResource;
use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('')->group(function () {
    Route::apiResource('todos', \App\Http\Controllers\Api\TodoController::class);
});
