<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
class PointController extends Controller
{
    public function getMeshes(){
        return DB::table('meshes')->where('user_id' , 1)->get();
    }

    public function savepoints(Request $req)
    {
        return DB::table('meshes')->insert([
            'user_id' => 1,
            'points' => json_encode($req['points']),
            'clientname' => $req['clientname'],
            'name' => $req['name'],
        ]);
    }
}
