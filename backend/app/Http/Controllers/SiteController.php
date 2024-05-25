<?php

namespace App\Http\Controllers;

use App\Models\Site;
use Illuminate\Http\Request;

class SiteController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if(getallheaders()['projet_id']){
            return Site::where("projet_id","=",getallheaders()['projet_id'])->get();
        }
        return Site::all();
    }
    /**
     * 
     */
    public function paginate(Request $request,$pageSize,$pageIndex)
    {
        if(getallheaders()['projet_id']){
            return Site::where("projet_id","=",getallheaders()['projet_id'])->paginate($pageSize,"*",null,$pageIndex);
        }
        return Site::paginate($pageSize,"*",null,$pageIndex); 
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
        Site::create($request->all());
        return response()->json([
            'message' => 'Une nouvelle Site a été ajoutée',
            'status' => 200
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Site  $site
     * @return \Illuminate\Http\Response
     */
    public function show(Site $site)
    {
        return $site;
    } 


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Site  $site
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Site $site)
    {
        $site->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Site  $site
     * @return \Illuminate\Http\Response
     */
    public function destroy(Site $site)
    {
        $site->delete();
    }

    


    public function uploadGeoJSON(Request $request){

        $request->validate([
            'uploadFile' => 'required|max:20048'
            ]);
        // $request->validate([
        //     'uploadFile' => 'required|mimes:json,geo.json,geojson|max:20048'
        //     ]);
            $site = Site::find($request->id);
            if($request->file()) {
                $fileName = time().'.'.$request->uploadFile->extension();
                $filePath = $request->file('uploadFile')->storeAs('uploads/geoJSON', $fileName, 'public');
                $site->geoJSON = $fileName;
                $this->removeGeoJSON($request->id);
                $site->save();
            }
        return Site::find($request->id);
    }

    public function getGeoJSON($geoJSON){
        // $site = Site::find($geoJSON);
        return response()->file('../storage/app/public/uploads/geoJSON/'.$geoJSON);
    }

    
    public function removeGeoJSON($site_id){
        $site = Site::find($site_id);

        if($site->geoJSON!=null&&file_exists(storage_path('../storage/app/public/uploads/geoJSON/'.$site->geoJSON)))
        unlink(storage_path('../storage/app/public/uploads/geoJSON/'.$site->geoJSON));
        $site->geoJSON = null;
        $site->update();
        return $site;
    }
    
}
