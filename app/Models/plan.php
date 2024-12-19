<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class plan extends Model
{
    use HasFactory;



    protected $fillable = [
        'id', 'plan', 'user_id','profit','days',
    ];

      public function user()
    {
        return $this->belongsTo('App\Models\User', 'user_id');
    }
}
