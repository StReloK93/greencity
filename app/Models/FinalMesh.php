<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FinalMesh extends Model
{
    protected $table = 'finalmeshes';
    public $timestamps = false;
    
    protected $fillable = [
        'territory_id',
        'position',
        'parentname',
        'name',
        'materialname',
        'username',
    ];
}
