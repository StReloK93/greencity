<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
class MeshesController extends Controller
{
    public function saveMeshes(Request $req){

        DB::table('activemeshes')->insert([
            'user_id' => 1,
            'position' => json_encode($req['position']),
            'parentname' => $req['parent'],
            'name' => $req['name'],
            'materialname' => $req['material'],
        ]);

        return json_encode($req['position']);
    }

    public function getMeshes(Request $req){
        return DB::table('activemeshes')->where('user_id' , 1)->get();
    }
}
