<?php

namespace App\Http\Controllers;

use App\Models\Terrain;
use Illuminate\Http\Request;

class TerrainController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if(getallheaders()['projet_id']){
            return Terrain::where("projet_id","=",getallheaders()['projet_id'])->get();
        }
        return Terrain::all();
    }
    
    public function paginate(Request $request,$pageSize,$pageIndex)
    {
        if(getallheaders()['projet_id']){
            return Terrain::where("projet_id","=",getallheaders()['projet_id'])->paginate($pageSize,"*",null,$pageIndex);
        }
        return Terrain::paginate($pageSize,"*",null,$pageIndex); 
    }
 

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $request['projet_id'] = getallheaders()['projet_id'];
        Terrain::create($request->all());
        return response()->json([
            'message' => 'Un nouveau terrain a été ajouté',
            'status' => 200
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Terrain  $terrain
     * @return \Illuminate\Http\Response
     */
    public function show(Terrain $terrain)
    {
        return $terrain;
    } 


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Terrain  $terrain
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Terrain $terrain)
    {
        $terrain->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Terrain  $terrain
     * @return \Illuminate\Http\Response
     */
    public function destroy(Terrain $terrain)
    {
        $terrain->delete();
    }
    
}
