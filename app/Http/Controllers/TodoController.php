<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function index(){

        $arr = [
            'title' =>'111111111',
            'title2' =>'222222222',
            'title3' =>'3333333333'

        ];

        return view('index', compact('arr'));
    }
}
