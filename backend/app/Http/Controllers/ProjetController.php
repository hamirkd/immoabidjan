<?php

namespace App\Http\Controllers;

use App\Models\Projet;
use Illuminate\Http\Request;

class ProjetController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['getAvatar']]);
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Projet::all();
    }
 

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Projet::create($request->all());
        return response()->json([
            'message' => 'Un nouveau projet a été ajouté',
            'status' => 200
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Projet  $projet
     * @return \Illuminate\Http\Response
     */
    public function show(Projet $projet)
    {
        return $projet;
    } 


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Projet  $projet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Projet $projet)
    {
        $projet->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Projet  $projet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Projet $projet)
    {
        $projet->delete();
    }

    public function uploadAvatar(Request $request){

        $request->validate([
            'uploadFile' => 'required|mimes:jpeg,jpg,png,xls,pdf|max:2048'
            ]);
            $projet = Projet::find($request->id);
            if($request->file()) {
                $fileName = time().'.'.$request->uploadFile->extension();
                $filePath = $request->file('uploadFile')->storeAs('uploads', $fileName, 'public');
                $projet->avatar = $fileName;
                $projet->save();
            }
        return Projet::find($request->id);
    }

    public function getAvatar($avatar){
        $projet = Projet::find($avatar);
        return response()->file('../storage/app/public/uploads/'.$projet->avatar);
    }
    public function removeAvatar($projet_id){
        $projet = Projet::find($projet_id);

        if($projet->avatar!=null&&file_exists(storage_path('../storage/app/public/uploads/'.$projet->avatar)))
        unlink(storage_path('../storage/app/public/uploads/'.$projet->avatar));
        $projet->avatar = null;
        $projet->update();
        return $projet;
    }
    
}