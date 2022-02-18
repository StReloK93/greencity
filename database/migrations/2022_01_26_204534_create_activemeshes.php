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
        Schema::create('finalmeshes', function (Blueprint $table) {
            $table->id();
            $table->integer('territory_id');
            $table->json('position');
            $table->text('parentname');
            $table->text('name');
            $table->string('materialname');
            $table->string('username')->nullable();
            $table->double('height', 15, 8)->default(1);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('plantTime')->nullable();
            $table->boolean('hovered')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('finalmeshes');
    }
}
