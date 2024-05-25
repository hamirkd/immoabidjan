<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Acquisition extends Model
{
    use HasFactory;
    /**
    * @var array
    */
   protected $fillable = [
        'projet_id',
        'site_id',
        'acquereur_id',
        'terrain_id',
        'dateAcquisition',
        'montant',
        'updated_by',
        'created_by',
        'updated_at',
        'created_at',
    ];
    public function getSiteAttribute()
    {
        return Site::find($this->site_id);
    }
    
    public function getTerrainAttribute()
    {
        return Terrain::find($this->terrain_id);
    }
    
    public function getAcquereurAttribute()
    {
        return Acquereur::find($this->acquereur_id);
    }
   
    protected $appends = ['site','terrain','acquereur'];
}
