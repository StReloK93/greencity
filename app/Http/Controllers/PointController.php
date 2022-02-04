<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use DB;
class PointController extends Controller
{
    public function getMeshes($id){
        return DB::table('meshes')->where('territory_id' , $id)->get();
    }

    public function savepoints(Request $req)
    {
        return DB::table('meshes')->insert([
            'territory_id' => $req['id'],
            'points' => json_encode($req['points']),
            'clientname' => $req['clientname'],
            'name' => $req['name'],
        ]);
    }
}
