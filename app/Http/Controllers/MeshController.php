<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class MeshController extends Controller
{
    public function getParentMeshes($id){
        return DB::table('meshes')->where('user_id' , $id)->get();
    }


    public function getActiveMeshes($id){
        return DB::table('activemeshes')->where('user_id' , $id)->get();
    }
}
