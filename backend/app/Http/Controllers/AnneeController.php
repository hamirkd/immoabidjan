<?php

namespace App\Http\Controllers;

use App\Models\Annee;
use Illuminate\Http\Request;

class AnneeController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Annee::all();
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
