<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PointController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MeshesController;
use App\Http\Controllers\ImageController;

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


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [UserController::class, 'getUser']);
    Route::get('/logout', [UserController::class, 'logout']);


    //Bu MainScene ---> Meshes.js da chaqirilgan
    Route::post('/savemeshes', [MeshesController::class, 'savemeshes']);


    Route::post('/editmeshes', [MeshesController::class, 'editMeshProperties']);
    Route::post('/deletemesh', [MeshesController::class, 'deletemesh']);

   

    Route::post('/getmesh', [MeshesController::class, 'getMesh']);
    Route::post('/editmesh', [MeshesController::class, 'editMesh']);


    //ActiveMeshlar yani qoyilgan daraxtlar va zdaniyalar bu MainScene ---> NativeMeshes.js da chaqirilgan
    Route::get('/getactivemeshes', [MeshesController::class, 'getmeshes']);

    //getMeshes bu constructorda qilingan meshlarni royhati qoyish uchun
    Route::get('/getmeshes', [PointController::class, 'getMeshes']);

    //Nuqtalar orqali mesh yasaganimizda uni saqlash
    Route::post('/savepoints', [PointController::class, 'savepoints']);



    Route::post('/upload', [ImageController::class, 'UploadImage']);

    Route::post('/getimages', [ImageController::class, 'getImages']);
    Route::post('/deleteimages', [ImageController::class, 'deleteImages']);
});





