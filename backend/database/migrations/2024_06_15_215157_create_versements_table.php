<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVersementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('versements', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('acquisition_id');
            $table->unsignedBigInteger('acquereur_id');
            $table->unsignedBigInteger('projet_id');
            $table->unsignedBigInteger('terrain_id');
            $table->unsignedBigInteger('site_id');
            $table->float('montant');
            $table->dateTime('cancelled_at')->nullable();
            $table->dateTime('dateversement')->nullable();
            $table->string('motif',200)->nullable();
            // $table->dateTime('deleted_at')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->unsignedBigInteger('created_by')->nullable();
            $table->timestamps();
            $table->softDeletes();    
            $table->foreign('site_id')->references('id')->on('sites')->onDelete('cascade');
            $table->foreign('terrain_id')->references('id')->on('terrains')->onDelete('cascade');
            $table->foreign('acquereur_id')->references('id')->on('acquereurs')->onDelete('cascade');
            $table->foreign('projet_id')->references('id')->on('projets')->onDelete('cascade');
            $table->foreign('acquisition_id')->references('id')->on('acquisitions')->onDelete('cascade');    
            $table->foreign('updated_by')->references('id')->on('users')->onDelete('cascade');    
            $table->foreign('created_by')->references('id')->on('users')->onDelete('cascade');    
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('versements');
    }
}
