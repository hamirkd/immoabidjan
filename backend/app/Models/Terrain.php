<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Terrain extends Model
{
    use HasFactory;
    /**
    * @var array
    */
   protected $fillable = [
        'projet_id',
        'site_id',
        'code',
        'numero',
        'lot',
        'typeLogement',
        'superficie',
        'updated_by',
        'created_by',
        'updated_at',
        'created_at',
    ];
    
    public function getSiteAttribute()
    {
        return Site::find($this->site_id);
    }
   
    protected $appends = ['site'];
}
