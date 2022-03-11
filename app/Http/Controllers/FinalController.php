<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Tree;
use Illuminate\Http\Request;
use App\Models\FinalMesh;
use App\Models\User;
use App\Models\Territory;
use App\Models\Image;
use Carbon\Carbon;
use File;

class FinalController extends Controller
{
    public function createFinal(Request $req){
        FinalMesh::insert([
            'territory_id' => $req['id'],
            'position' => json_encode($req['position']),
            'parentname' => $req['parent'],
            'name' => $req['name'],
            'materialname' => $req['material'],
        ]);

        return json_encode($req['position']);
    }

    public function editFinalPosition(Request $req){
        FinalMesh::where([
            ['territory_id',$req['id']],
            ['name', $req['name']],
        ])->update(['position' => json_encode($req['position'])]);
    }

    //getActiveMeshes
    public function getAllFinal($id){
        return FinalMesh::where('territory_id' , $id)->get();
    }

    public function getOneFinal(Request $req){

        $mesh = FinalMesh::select('username', 'height','parentname','plantTime', 'materialname','hovered')
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
        $data = $req->all();

        if($data['height'] < 0.01){
            $data['height'] = 0.01; 
        }
        else if($data['height'] > 7.01){
            $data['height'] = 7.01;
        }
        return FinalMesh::where([
            ['territory_id', $data['id']],
            ['name', $data['name']],
        ])->update([
            'username' => $data['username'],
            'height' => $data['height'],
            'plantTime' => $data['plantTime'],
            'hovered' => $data['hovered'],
        ]);
    }

    public function territroy_count(){
        $users = User::all();

        $terry = [];
        foreach ($users as $key => $user) {
            $terry[$user->name] = Territory::where('user_id', $user->id)->pluck('id')->toArray();
        }

        foreach ($terry as $key => $list) {
            $terry[$key] = FinalMesh::where('parentname' , 'plant')->whereIn('territory_id', $list)->count();
        }

        return $terry;
    }


    public function plantInfromation(){
        $mevali = FinalMesh::where('parentname' , 'plant')->whereNotIn('materialname', Tree::manzarali())->count();
        $manzarali = FinalMesh::where('parentname' , 'plant')->whereIn('materialname', Tree::manzarali())->count();

        $umumiy = FinalMesh::where('parentname' , 'plant')->count();

        return ['mevali' => $mevali,'manzarali' => $manzarali,'all' => $umumiy];
    }

    public function deleteOneFinal(Request $req){
        $finalMesh = FinalMesh::where([
            ['territory_id', $req['id']],
            ['name', $req['name']],
        ])->first();

        $images = Image::where('mesh_name', $finalMesh->name)->get();

        foreach ($images as $mesh) {
            if(File::exists(public_path($mesh->image))){
                File::delete(public_path($mesh->image));
            }
        }
        
        Image::where('mesh_name', $finalMesh->name)->delete();
        $finalMesh = FinalMesh::where([
            ['territory_id', $req['id']],
            ['name', $req['name']],
        ])->delete();

        return $finalMesh;
    }
}
