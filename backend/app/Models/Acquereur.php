<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Acquereur extends Model
{
    use HasFactory;
    /**
    * @var array
    */
   protected $fillable = [
        'projet_id',
        'nom',
        'prenom',
        'docIdentification',
        'telephone',
        'email',
        'genre',
        'typeDoc',
        'typeAcquereur',
        'updated_by',
        'created_by',
        'updated_at',
        'created_at',
    ];
}
