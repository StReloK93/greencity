<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ParentMesh;
use App\Models\FinalMesh;
use Carbon\Carbon;
class ParentController extends Controller
{
    //savepoints old name pointcontroller
    public function createParent(Request $req){
        $now = Carbon::now()->format('YmdHis');

        return ParentMesh::insert([
            'territory_id' => $req['id'],
            'points' => json_encode($req['points']),
            'clientname' => $req['clientname'],
            'name' => $req['name'].$now,
        ]);
    }

    //getMeshes old name pointcontroller
    public function getParents($id){
        return ParentMesh::where('territory_id' , $id)->get();
    }

    //getMeshes old name pointcontroller
    public function deleteParent($name){
        $finals = FinalMesh::where('parentname', $name)->get();

        ParentMesh::where('name' , $name)->delete();
        FinalMesh::where('parentname', $name)->delete();

        return $finals;
    }


}
