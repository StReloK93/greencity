<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use DB;
class PointController extends Controller
{
    public function getMeshes(){
        $userId = Auth::user()->id;
        return DB::table('meshes')->where('user_id' , $userId)->get();
    }

    public function savepoints(Request $req)
    {
        $userId = Auth::user()->id;
        return DB::table('meshes')->insert([
            'user_id' => $userId,
            'points' => json_encode($req['points']),
            'clientname' => $req['clientname'],
            'name' => $req['name'],
        ]);
    }
}
