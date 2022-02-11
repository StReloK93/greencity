<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ParentMesh extends Model
{
    protected $table = 'parentmeshes';
    public $timestamps = false;
    
    protected $fillable = [
        'territory_id',
        'name',
        'clientname',
        'points',
    ];
}
