<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ParentMesh;
use App\Models\Territory;
use App\Models\FinalMesh;

use App\Http\Controllers\Tree;
use App\Models\Image;
use App\Models\User;
use Auth;
use File;
class TerritoryController extends Controller
{
    public function getTerritory($id){
        return Territory::find($id);
    }

    public function create(Request $request){
        return Territory::create([
            'user_id' => Auth::user()->id,
            'name' => $request['name'],
        ]);
    }

    public function update(Request $request){
        $territory = Territory::find($request['id']);
        $territory->name = $request['name'];
        $territory->save();
        return $this->getForUser();
    }

    public function delete($id){
        $territory = Territory::find($id);
        $finalMeshes = FinalMesh::where('territory_id',$territory->id)->get();
        $plants = [];


        foreach ($finalMeshes as $key => $meshes) {
            if($meshes->parentname == "plant"){
                array_push($plants, $meshes->name);
            }
        }

        $images = Image::whereIn('mesh_name', $plants)->get();


        foreach ($images as $mesh) {
            if(File::exists(public_path($mesh->image))){
                File::delete(public_path($mesh->image));
            }
        }
        Image::whereIn('mesh_name', $plants)->delete();
        FinalMesh::where('territory_id',$territory->id)->delete();
        ParentMesh::where('territory_id',$territory->id)->delete();
        Territory::find($id)->delete();
        return true;
    }

    public function getForUser(){
        $territory = Territory::where('user_id', Auth::user()->id)->get();
        foreach ($territory as $key => $value) {
            $territory[$key]->manzarali = FinalMesh::where([
                ['parentname' , 'plant'],
                ['territory_id' , $value->id],
            ])->whereIn('materialname', Tree::manzarali())->count();
            $territory[$key]->mevali = FinalMesh::where([
                ['parentname' , 'plant'],
                ['territory_id' , $value->id],
            ])->whereNotIn('materialname', Tree::manzarali())->count();
        }
        return $territory;
    }

    public function getOneTerritory($id){
        return Territory::where([
            ['user_id',  Auth::user()->id],
            ['id',  $id],
        ])->exists();
    }

    //job
    public function getTerritories(Request $request){
        $user = User::where('name', $request['name'] )->first();
        if(isset($user->id)){
            return Territory::where([
                'user_id' => $user->id,
            ])->get();
        }
        else{
            return false;
        }
    }
}
