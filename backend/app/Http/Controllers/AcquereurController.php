<?php

namespace App\Http\Controllers;

use App\Models\Acquereur;
use Illuminate\Http\Request;

class AcquereurController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if(getallheaders()['projet_id']){
            return Acquereur::where("projet_id","=",getallheaders()['projet_id'])->get();
        }
        return Acquereur::all();
    }

    public function paginate(Request $request,$pageSize,$pageIndex)
    {
        if(getallheaders()['projet_id']){
            return Acquereur::where("projet_id","=",getallheaders()['projet_id'])->paginate($pageSize,"*",null,$pageIndex);
        }
        return Acquereur::paginate($pageSize,"*",null,$pageIndex); 
    }
 

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $acquereur = $request->all();
        $acquereur['created_by']= auth()->user()->id;
        Acquereur::create($acquereur);
        return response()->json([
            'message' => 'Un nouveau acquereur a été ajouté',
            'status' => 200
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Acquereur  $acquereur
     * @return \Illuminate\Http\Response
     */
    public function show(Acquereur $acquereur)
    {
        return $acquereur;
    } 


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Acquereur  $acquereur
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Acquereur $acquereur)
    {
        $acquereurFind = Acquereur::find($request->id);
        $acquereurFind['updated_by']= auth()->user()->id;
        $acquereurFind->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Acquereur  $acquereur
     * @return \Illuminate\Http\Response
     */
    public function destroy(Acquereur $acquereur)
    {
        $acquereur->delete();
    }
    
}
