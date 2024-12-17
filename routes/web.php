<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});

Route::get('/{pathMatch}', function(){
    return view('index');
})->where('pathMatch', ".*");






use App\Http\Controllers\DataController;

Route::post('/api/submit-data', [DataController::class, 'mydata']);
