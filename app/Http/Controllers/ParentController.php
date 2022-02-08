<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
//meshes table == parentmeshes

class ParentController extends Controller
{
    //savepoints old name pointcontroller
    public function createParent(Request $req){
        return DB::table('parentmeshes')->insert([
            'territory_id' => $req['id'],
            'points' => json_encode($req['points']),
            'clientname' => $req['clientname'],
            'name' => $req['name'],
        ]);
    }

    //getMeshes old name pointcontroller
    public function getParents($id){
        return DB::table('parentmeshes')->where('territory_id' , $id)->get();
    }
}
