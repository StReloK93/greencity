<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Territory;
use Auth;
class TerritoryController extends Controller
{
    public function create(Request $request){
        return ;
    }

    public function update(Request $request){
        return ;
    }

    public function delete($id){
        return ;
    }

    public function getForUser(){
        return Territory::where('user_id', Auth::user()->id)->get();
    }

}
