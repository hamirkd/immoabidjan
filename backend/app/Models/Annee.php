<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Annee extends Model
{
    use HasFactory;
    /**
    * @var array
    */
   protected $fillable = [
      'annee',
      'updated_at',
      'created_at',
    ];
   
}
