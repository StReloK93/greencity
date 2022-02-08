<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ImageController;


use App\Http\Controllers\FinalController;
use App\Http\Controllers\ParentController;
use App\Http\Controllers\TerritoryController;
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
Route::post('/login', [UserController::class, 'login']);
Route::post('/register', [UserController::class, 'register']);

Route::get('/getparents/{id}', [ParentController::class, 'getParents']);
Route::get('/getallfinal/{id}', [FinalController::class, 'getAllFinal']);

Route::middleware('auth:sanctum')->group(function () {
    //api/savepoint
    Route::post('/createparent', [ParentController::class, 'createParent']);
    
    Route::get('/user', [UserController::class, 'getUser']);
    Route::get('/logout', [UserController::class, 'logout']);


    //Bu MainScene ---> Meshes.js da chaqirilgan
    Route::post('/createfinal', [FinalController::class, 'createFinal']); //savemeshes
    Route::post('/editfinalposition', [FinalController::class, 'editFinalPosition']); //editmeshes
    Route::post('/deleteonefinal', [FinalController::class, 'deleteOneFinal']);

    Route::post('/getonefinal', [FinalController::class, 'getOneFinal']); //getmesh
    Route::post('/editfinalprops', [FinalController::class, 'editFinalProps']); //editmesh


    //images
    Route::post('/upload', [ImageController::class, 'UploadImage']);
    Route::post('/getimages', [ImageController::class, 'getImages']);
    Route::post('/deleteimages', [ImageController::class, 'deleteImages']);


    //Territories routes
    Route::get('/territories/getforuser', [TerritoryController::class, 'getForUser']);
    Route::get('/territories/getone/{id}', [TerritoryController::class, 'getOneTerritory']);
    Route::post('/territories/create', [TerritoryController::class, 'create']);

});





