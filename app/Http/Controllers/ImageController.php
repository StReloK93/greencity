<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use DB;
class ImageController extends Controller
{
    public function UploadImage(Request $req){
        return $req->all();
    }
}
