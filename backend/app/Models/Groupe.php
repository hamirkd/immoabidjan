<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Groupe extends Model
{
    use HasFactory;
    /**
    * @var array
    */
   protected $fillable = [
      'libelle',
      'updated_by',
      'created_by',
      'updated_at',
      'created_at',
    ];
}
