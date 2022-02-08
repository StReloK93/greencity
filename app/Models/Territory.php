<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Territory extends Model
{
    protected $table = 'territory';
    public $timestamps = false;
    
    protected $fillable = [
        'name',
        'user_id'
    ];
}
