<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActivemeshes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activemeshes', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->json('position');
            $table->text('parentname');
            $table->text('name');
            $table->string('materialname');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('activemeshes');
    }
}
