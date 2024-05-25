<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Site extends Model
{
    use HasFactory;
    /**
    * @var array
    */
   protected $fillable = [
    'libelle',
    'description',
    'projet_id',
    'geoJSON',
    'updated_by',
    'created_by',
    'updated_at',
    'created_at',
    ];
}
