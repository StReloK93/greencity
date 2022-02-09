<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use Image;
use File;
use Auth;
use DB;
class ImageController extends Controller
{
    public function UploadImage(Request $req){
        //upload
        if(isset($req['image'])){
            $now = Carbon::now()->format('YmdHis');
            $listImageNames = [];

            foreach ($req['image'] as $key => $value) {
                $imgName = $key.$now.'.jpg';
    
                $file = $value;
    
                $file->move(public_path('images/daraxt'),$imgName);
                $locfile = public_path('images/daraxt/'.$imgName);
                $files = Image::make($locfile)->resize(1024, null, function ($constraint) {$constraint->aspectRatio();});
                $files->save($locfile);
    
                array_push($listImageNames, '/images/daraxt/'.$imgName);
            }

            $listForDB = [];

            foreach ($listImageNames as $key => $value) {
                array_push($listForDB, ['mesh_name' => $req['name'],'image' => $value]);
            }
    
            DB::table('images')->insert($listForDB);

            return $this->getIMG($req);
        }

  
    }


    public function deleteImages(Request $req){
        if(isset($req['list'])){
            $result = DB::table('images')->select('image')->where([
                ['mesh_name', $req['name']],
            ])->whereNotIn('image', $req['list'])->first();

            if(File::exists(public_path($result->image))){
                File::delete(public_path($result->image));
            }

            DB::table('images')->where([
                ['mesh_name', $req['name']],
                ['image', $result->image],
            ])->delete();
        }
    }

    public function getImages(Request $req){
        return $this->getIMG($req);
    }


    
    public function getIMG($req){
        $result = DB::table('images')->select('image')->where([
            ['mesh_name', $req['name']],
        ])->get();

        $images = [];
        foreach($result as $key => $image){
            $images[$key] = $image->image;
        }
        return $images;
    }
}
