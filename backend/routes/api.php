<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PasswordResetController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/password-forget', [PasswordResetController::class, 'generate_password_init_token']);
Route::post('/password-verify', [PasswordResetController::class, 'verif_token_enabled_to_init_password']);
Route::post('/password-init', [PasswordResetController::class, 'reset_password_init']);
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']); 
    Route::get('/findAllUser',[AuthController::class,'findAllUser']);
    Route::delete('/deleteUser/{user}',[AuthController::class,'deleteUser']);
    Route::get('/bloquerUser/{user}',[AuthController::class,'bloquerUser']);
    Route::get('/userProfile',[AuthController::class,'userProfile']);
    Route::post('/updateMyProfile',[AuthController::class,'updateMyProfile']);
    Route::post('/uploadAvatar',[AuthController::class,'uploadAvatar']);
    Route::get('/getAvatar/{avatar}',[AuthController::class,'getAvatar']);
});


Route::middleware('auth:api')->group(function() { 
    Route::apiResource('annee', 'App\Http\Controllers\AnneeController');
    Route::apiResource('groupe', 'App\Http\Controllers\GroupeController');

    Route::apiResource('terrain', 'App\Http\Controllers\TerrainController');
    Route::get('terrain/paginate/{pageSize}/{pageIndex}', 'App\Http\Controllers\TerrainController@paginate');

    Route::apiResource('projet', 'App\Http\Controllers\ProjetController');
    Route::post('projet/uploadAvatar','App\Http\Controllers\ProjetController@uploadAvatar');
    Route::get('projet/getAvatar/{avatar}','App\Http\Controllers\ProjetController@getAvatar');
    Route::get('projet/removeAvatar/{id}','App\Http\Controllers\ProjetController@removeAvatar');

    
    Route::apiResource('dashboard', 'App\Http\Controllers\DashboardController');
    Route::apiResource('requete', 'App\Http\Controllers\RequeteController');
    Route::post('requete/findBy', 'App\Http\Controllers\RequeteController@findBy');

    // Api pour les sites
    Route::apiResource('site', 'App\Http\Controllers\SiteController');
    Route::post('site/uploadGeoJSON','App\Http\Controllers\SiteController@uploadGeoJSON');
    Route::get('site/getGeoJSON/{geoJSON}','App\Http\Controllers\SiteController@getGeoJSON');
    Route::get('site/removeGeoJSON/{id}','App\Http\Controllers\SiteController@removeGeoJSON');
    Route::get('site/paginate/{pageSize}/{pageIndex}', 'App\Http\Controllers\SiteController@paginate');
    
    // Api pour les acquereurs
    Route::apiResource('acquereur', 'App\Http\Controllers\AcquereurController');
    Route::get('acquereur/paginate/{pageSize}/{pageIndex}', 'App\Http\Controllers\AcquereurController@paginate');
    
    // Api pour les acquisitions
    Route::apiResource('acquisition', 'App\Http\Controllers\AcquisitionController');
    Route::get('acquisition/paginate/{pageSize}/{pageIndex}', 'App\Http\Controllers\AcquisitionController@paginate');
    Route::get('acquisition/findBySite/{site_id}', 'App\Http\Controllers\AcquisitionController@findBySite');
    Route::get('acquisition/findByTerrain/{terrain_id}', 'App\Http\Controllers\AcquisitionController@findByTerrain');
    Route::get('acquisition/findByAcquereur/{acquereur_id}', 'App\Http\Controllers\AcquisitionController@findByAcquereur');
    Route::post('acquisition/downloadGenererContrat', 'App\Http\Controllers\AcquisitionController@downloadGenererContrat');
    
    // Media
    Route::apiResource('media', 'App\Http\Controllers\MediaController');
    Route::post('media/getMediaByTypeAndId', 'App\Http\Controllers\MediaController@getMediaByTypeAndId');
    Route::get('media/getDocument/{id}', 'App\Http\Controllers\MediaController@getDocument');


    Route::apiResource('utilisateur', 'App\Http\Controllers\UtilisateurController');
    Route::get('utilisateur/find/all', 'App\Http\Controllers\UtilisateurController@findAll');
    Route::get('utilisateur/restore/{id}', 'App\Http\Controllers\UtilisateurController@restore');

    // Versement
    Route::apiResource('versements', 'App\Http\Controllers\VersementController');
    Route::post('versements/getByDataFilter', 'App\Http\Controllers\VersementController@getByDataFilter');
    Route::post('versements/cancelle', 'App\Http\Controllers\VersementController@cancelle');
    Route::post('versements/restore', 'App\Http\Controllers\VersementController@restore');
    Route::post('acquisition/paginate/{pageSize}/{pageIndex}', 'App\Http\Controllers\VersementController@getByDataFilterPaginate');

    
});