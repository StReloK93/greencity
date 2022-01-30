<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PointController;
use App\Http\Controllers\MeshesController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [PointController::class, 'savepoints']);
Route::post('/register', [PointController::class, 'savepoints']);



Route::post('/savepoints', [PointController::class, 'savepoints']);
Route::get('/getmeshes', [PointController::class, 'getMeshes']);


Route::post('/savemeshes', [MeshesController::class, 'savemeshes']);
Route::get('/getactivemeshes', [MeshesController::class, 'getmeshes']);