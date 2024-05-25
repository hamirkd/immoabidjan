<?php

namespace App\Http\Controllers;

use App\Models\Donnee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RequeteController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if(getallheaders()['projet_id']){
            return Donnee::where("projet_id","=",getallheaders()['projet_id'])->get();
        }
        return Donnee::all();
    }

    public function findBy(Request $request)
    {
        $donnees = DB::table('donnees')
        ->leftJoin('groupes', function($join){
            $join->on('donnees.groupe_id', '=', 'groupes.id');
        })
        ->leftJoin('indicateurs', function($join){
            $join->on('donnees.indicateur_id', '=', 'indicateurs.id');
        })
        ->leftJoin('niveau_localisations', function($join){
            $join->on('donnees.niveau_localisation_id', '=', 'niveau_localisations.id');
        }) 
        ->leftJoin('desagregation_geographiques', function($join){
            $join->on('donnees.desagregation_geographique_id', '=', 'desagregation_geographiques.id');
        })
        ->select('donnees.*','groupes.libelle as groupe','indicateurs.intitule as indicateur','niveau_localisations.libelle as niveau','desagregation_geographiques.libelle as localisation','desagregation_geographiques.code as code')->orderBy('donnees.created_at', 'ASC');
        if(isset($request->listindicateur)&&count($request->listindicateur)){
            $donnees->whereIn('donnees.indicateur_id', $request->listindicateur );
        } 
        
        if(isset($request->listannee)&&count($request->listannee)){
            $donnees->whereIn('donnees.annee', $request->listannee );
        }

        if(isset($request->niveau_localisation)){
            $donnees->where('donnees.niveau_localisation_id','=', $request->niveau_localisation );
        }

        if(isset($request->listdesagregation_geographique)&&count($request->listdesagregation_geographique)>0){
            $donnees->whereIn('donnees.desagregation_geographique_id', $request->listdesagregation_geographique );
        }

        return $donnees->where("donnees.projet_id","=",getallheaders()['projet_id'])->get();
    }
 

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Donnee::create($request->all());
        return response()->json([
            'message' => 'Une nouvelle donnee a été ajoutée',
            'status' => 200
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Donnee  $donnee
     * @return \Illuminate\Http\Response
     */
    public function show(Donnee $donnee)
    {
        return $donnee;
    } 


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Donnee  $donnee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Donnee $donnee)
    {
        $donnee->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Donnee  $donnee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Donnee $donnee)
    {
        $donnee->delete();
    }
    
}
