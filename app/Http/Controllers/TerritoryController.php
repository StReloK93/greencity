<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Territory;
use Auth;
class TerritoryController extends Controller
{
    public function create(Request $request){
        return Territory::create([
            'user_id' => Auth::user()->id,
            'name' => $request['name'],
        ]);
    }

    public function update(Request $request,$id){
        $territory = Territory::find($id);
        $territory->name = $request['name'];
        return $territory;
    }

    public function delete($id){
        return Territory::find($id)->delete();
    }

    public function getForUser(){
        return Territory::where('user_id', Auth::user()->id)->get();
    }

    public function getOneTerritory($id){
        return Territory::where([
            ['user_id',  Auth::user()->id],
            ['id',  $id],
        ])->exists();
    }
}
