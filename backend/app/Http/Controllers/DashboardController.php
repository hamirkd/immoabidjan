<?php

namespace App\Http\Controllers;

use App\Models\Annee;
use App\Models\Indicateur;
use App\Models\Donnee;
use App\Models\DesagregationGeographique;
use Illuminate\Http\Request;
use Carbon\Carbon;

class DashboardController extends Controller
{
    // getallheaders()['projet_id']
    // $request->header('projet_id')
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $nbIndicateur = 0;
        if(getallheaders()['projet_id']){
            $nbIndicateur = Indicateur::where("projet_id","=",getallheaders()['projet_id'])->count();
        }
        $last10DonneeCalcule = Donnee::where("projet_id","=",getallheaders()['projet_id'])->orderby('id','DESC')->limit(10)->get();
        $nbIndicateur = Indicateur::where("projet_id","=",getallheaders()['projet_id'])->count();
        $nbIndicateurRenseigne = Donnee::select('indicateur_id')->distinct()->where("projet_id","=",getallheaders()['projet_id'])->count();
        $nblocaliteRenseigne = Donnee::select('desagregation_geographique_id')->distinct()->where("projet_id","=",getallheaders()['projet_id'])->count();
        $nblocalite = DesagregationGeographique::where("projet_id","=",getallheaders()['projet_id'])->count();
        $nbDonneeCalcule = Donnee::where("projet_id","=",getallheaders()['projet_id'])->count();
        $nbDonneeCalculeToday = Donnee::where("projet_id","=",getallheaders()['projet_id'])
        ->whereDate('created_at', Carbon::today())->count();

        return [
            'last10DonneeCalcule'=>$last10DonneeCalcule,
            'nbIndicateur'=>$nbIndicateur,
            'nbIndicateurRenseigne'=>$nbIndicateurRenseigne,
            'nblocaliteRenseigne'=>$nblocaliteRenseigne,
            'nblocalite'=>$nblocalite,
            'nbDonneeCalcule'=>$nbDonneeCalcule,
            'nbDonneeCalculeToday'=>$nbDonneeCalculeToday,
        ];
    }
 

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Annee::create($request->all());
        return response()->json([
            'message' => 'Une nouvelle annee a été ajoutée',
            'status' => 200
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Annee  $annee
     * @return \Illuminate\Http\Response
     */
    public function show(Annee $annee)
    {
        return $annee;
    } 


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Annee  $annee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Annee $annee)
    {
        $annee->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Annee  $annee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Annee $annee)
    {
        $annee->delete();
    }
    
}
