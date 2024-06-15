<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAcquereursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('acquereurs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('projet_id');
            $table->string('nom',50);
            $table->string('prenom',50);
            $table->string('genre',50);
            $table->string('typeDoc',50);
            $table->string('docIdentification',255);
            $table->string('email',255)->nullable();
            $table->string('telephone',255);
            $table->string('typeAcquereur',255);
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->unsignedBigInteger('created_by')->nullable();
            $table->timestamps();
            $table->foreign('projet_id')->references('id')->on('projets')->onDelete('cascade');   
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
        Schema::dropIfExists('acquereurs');
    }
}
