<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use DB;
class MeshesController extends Controller
{
    public function saveMeshes(Request $req){
        DB::table('activemeshes')->insert([
            'user_id' => Auth::user()->id,
            'position' => json_encode($req['position']),
            'parentname' => $req['parent'],
            'name' => $req['name'],
            'materialname' => $req['material'],
        ]);

        return json_encode($req['position']);
    }

    public function editMeshProperties(Request $req){
        DB::table('activemeshes')
            ->where([
                ['user_id', Auth::user()->id],
                ['name', $req['name']],
            ])
            ->update(['position' => json_encode($req['position'])]);
    }

    public function getMeshes(){
        return DB::table('activemeshes')->where('user_id' , Auth::user()->id)->get();
    }







    public function getMesh(Request $req){
        return DB::table('activemeshes')
        ->select('username', 'height','parentname')
        ->where([
            ['user_id', Auth::user()->id],
            ['name', $req['name']],
        ])->first();
    }

    public function editMesh(Request $req){
        return DB::table('activemeshes')
        ->where([
            ['user_id', Auth::user()->id],
            ['name', $req['name']],
        ])->update([
            'username' => $req['username'],
            'height' => $req['height']
        ]);
    }

    public function deletemesh(Request $req){
        DB::table('activemeshes')
            ->where([
                ['user_id', Auth::user()->id],
                ['name', $req['name']],
            ])
            ->delete();
    }
}
