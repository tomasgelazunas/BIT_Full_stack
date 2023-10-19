<?php

namespace App\Http\Controllers;

use App\Models\Salon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SalonController extends Controller
{

    public function index()
    {
        return Inertia::render('Salons');
    }



    public function store(Request $request)
    {

        Salon::create($request->all());

        return response()->json([
            'message' => 'Salon created successfully'
        ], 201);
        
    }

    public function list()
    {
        $salons = Salon::all();

        return response()->json([
            'salons' => $salons
        ], 200);
    }


    /**
     * Display the specified resource.
     */
    public function show(Salon $salon)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Salon $salon)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Salon $salon)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Salon $salon)
    {
        //
    }
}
