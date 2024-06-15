<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTerrainsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('terrains', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('projet_id')->nullable();
            $table->unsignedBigInteger('site_id');
            $table->string('code',20);
            $table->string('numero',6);
            $table->string('lot',4)->nullable();
            $table->string('typeLogement',20)->nullable();
            $table->string('superficie',11)->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->unsignedBigInteger('created_by')->nullable();
            $table->timestamps();
            $table->foreign('site_id')->references('id')->on('sites')->onDelete('cascade');   
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
        Schema::dropIfExists('terrains');
    }
}
