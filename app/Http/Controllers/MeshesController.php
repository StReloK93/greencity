<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use DB;
use Carbon\Carbon;
class MeshesController extends Controller
{
    public function saveMeshes(Request $req){
        DB::table('activemeshes')->insert([
            'territory_id' => $req['id'],
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
                ['territory_id', Auth::user()->id],
                ['name', $req['name']],
            ])
            ->update(['position' => json_encode($req['position'])]);
    }

    public function getMeshes($id){
        return DB::table('activemeshes')->where('territory_id' , $id)->get();
    }



    public function getMesh(Request $req){

        $mesh = DB::table('activemeshes')
        ->select('username', 'height','parentname','plantTime')
        ->where([
            ['territory_id', $req['id']],
            ['name', $req['name']],
        ])->first();
        
        if($mesh->plantTime) {
            $mesh->plantTime = Carbon::parse($mesh->plantTime)->format('Y-m-d');
        }
        return $mesh;
    }

    public function editMesh(Request $req){
        return DB::table('activemeshes')
        ->where([
            ['territory_id', $req['id']],
            ['name', $req['name']],
        ])->update([
            'username' => $req['username'],
            'height' => $req['height'],
            'plantTime' => $req['plantTime'],
        ]);
    }

    public function deletemesh(Request $req){
        DB::table('activemeshes')
            ->where([
                ['territory_id', $req['id']],
                ['name', $req['name']],
            ])
            ->delete();
    }
}
