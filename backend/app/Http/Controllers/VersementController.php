<?php

namespace App\Http\Controllers;

use App\Models\Versement;
use App\Models\Inscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use MBence\OpenTBSBundle\Services\OpenTBS;
use App\Models\Eleve;
use App\Models\AnneeScolaire;
use App\Models\Classe;
use App\Models\SalleClasse;
use App\Models\Scolarite;
use Carbon\Carbon;
use DateTime;

class VersementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Versement::all();
    }

 

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       // $request['projet_id'] = $_GET['projet_id'];
        if(isset($request['id'])&&$request['id']>0){
            $versement = Versement::find($request['id']);
            $versement->update($request->all());
            return response()->json([
                'message' => "Le versement a été mise à jour",
                'status' => 200
            ], 200);
        }
        Versement::create($request->all());
        return response()->json([
            'message' => 'Ajout d\'un versement',
            'status' => 200
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Versement  $versement
     * @return \Illuminate\Http\Response
     */
    public function show(Versement $versement)
    {
        return $versement;
    } 

    /**
     * Display a listing of the resource by Classe.
     *
     * @return \Illuminate\Http\Response
     */
    public function getByDataFilter(Request $request)
    {
        $query = Versement::where('projet_id','=',$request['projet_id']);
        if ($request['acquisition_id']) {
            $query = $query->where('acquisition_id','=',$request['acquisition_id']);
        }
        if ($request['site_id']) {
            $query = $query->where('site_id','=',$request['site_id']);
        }
        if ($request['terrain_id']) {
            $query = $query->where('terrain_id','=',$request['terrain_id']);
        }
        if ($request['acquereur_id']) {
            $query = $query->where('acquereur_id','=',$request['acquereur_id']);
        }
        return $query->get();
    }

    public function getByDataFilterPaginate(Request $request,$pageSize,$pageIndex)
    {
        $query = Versement::where('projet_id','=',$request['projet_id']);
        if ($request['acquisition_id']) {
            $query = $query->where('acquisition_id','=',$request['acquisition_id']);
        }
        if ($request['site_id']) {
            $query = $query->where('site_id','=',$request['site_id']);
        }
        if ($request['terrain_id']) {
            $query = $query->where('terrain_id','=',$request['terrain_id']);
        }
        if ($request['acquereur_id']) {
            $query = $query->where('acquereur_id','=',$request['acquereur_id']);
        }
        return $query->paginate($pageSize,"*",null,$pageIndex);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Versement  $scolarite
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Versement $versement)
    {
        $versement->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Versement  $versement
     * @return \Illuminate\Http\Response
     */
    public function destroy(Versement $versement)
    {
        $versement->delete();
    }
    
    public function cancelle(Request $request)
    {
        $versement = Versement::find($request->id);
        return $versement->update(["cancelled_at"=>now(),"motif"=>$request->motif]);
    }

    public function restore(Request $request)
    {
        $versement = Versement::find($request->id);
        return $versement->update(["cancelled_at"=>null,"motif"=>null]);
    }
    
}
