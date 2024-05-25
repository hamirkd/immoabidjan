<?php

namespace App\Http\Controllers;

use App\Models\Acquisition;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AcquisitionController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if(getallheaders()['projet_id']){
            return Acquisition::where("projet_id","=",getallheaders()['projet_id'])->get();
        }
        return Acquisition::all();
    }

    public function paginate(Request $request,$pageSize,$pageIndex)
    {
        if(getallheaders()['projet_id']){
            return Acquisition::where("projet_id","=",getallheaders()['projet_id'])->paginate($pageSize,"*",null,$pageIndex);
        }
        return Acquisition::paginate($pageSize,"*",null,$pageIndex); 
    }
 

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $acquisition = $request->all();
        $acquisition['created_by']= auth()->user()->id;
        Acquisition::create($acquisition);
        return response()->json([
            'message' => 'Une nouvelle acquisition a été ajoutée',
            'status' => 200
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Acquisition  $acquisition
     * @return \Illuminate\Http\Response
     */
    public function show(Acquisition $acquisition)
    {
        return $acquisition;
    } 


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Acquisition  $acquisition
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Acquisition $acquisitionU)
    {
        $acquisitionFind = Acquisition::find($request->id);
        $acquisitionFind['updated_by']= auth()->user()->id;
        $acquisitionFind->update($request->all());
    }

    public function findBySite($site_id)
    {
        return Acquisition::where("site_id","=",$site_id)->get();
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Acquisition  $acquisition
     * @return \Illuminate\Http\Response
     */
    public function destroy(Acquisition $acquisition)
    {
        $acquisition->delete();
    }
    
}
