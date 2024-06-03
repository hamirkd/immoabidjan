<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AcquisitionItem extends Model
{
    use HasFactory;
    protected $table = 'acquisitions';
    /**
    * @var array
    */
   protected $fillable = [
    'code',
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
    public function getCreatedauteurAttribute()
    {
        $user = User::find($this->created_by);
        if(isset($user)) {
            return $user->last_name.' '.$user->first_name;
        }
    }
    public function getUpdatedauteurAttribute()
    {
        $user = User::find($this->updated_by);
        if(isset($user)) {
            return $user->last_name.' '.$user->first_name;
        }
    }
    
   
    protected $appends = ['site','terrain','acquereur','createdauteur','updatedauteur'];
}
