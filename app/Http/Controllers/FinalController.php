<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use DB;


class FinalController extends Controller
{
    public function createFinal(Request $req){
        DB::table('finalmeshes')->insert([
            'territory_id' => $req['id'],
            'position' => json_encode($req['position']),
            'parentname' => $req['parent'],
            'name' => $req['name'],
            'materialname' => $req['material'],
        ]);

        return json_encode($req['position']);
    }

    public function editFinalPosition(Request $req){
        DB::table('finalmeshes')
            ->where([
                ['territory_id',$req['id']],
                ['name', $req['name']],
            ])
            ->update(['position' => json_encode($req['position'])]);
    }

    //getActiveMeshes
    public function getAllFinal($id){
        return DB::table('finalmeshes')->where('territory_id' , $id)->get();
    }

    public function getOneFinal(Request $req){

        $mesh = DB::table('finalmeshes')
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

    public function editFinalProps(Request $req){
        return DB::table('finalmeshes')
        ->where([
            ['territory_id', $req['id']],
            ['name', $req['name']],
        ])->update([
            'username' => $req['username'],
            'height' => $req['height'],
            'plantTime' => $req['plantTime'],
        ]);
    }

    public function deleteOneFinal(Request $req){
        DB::table('finalmeshes')
            ->where([
                ['territory_id', $req['id']],
                ['name', $req['name']],
            ])
            ->delete();
    }
}
