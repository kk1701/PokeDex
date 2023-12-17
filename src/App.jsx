// import { useState } from 'react'
import Pokedex from './Components/PokeDex/Pokedex'

import './App.css'
import PokemonDetails from './Components/PokemonDetails/PokemonDetails'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path='/pokemon/:id' element={<PokemonDetails />} />
      <Route path="*" element={<h1>Not Found</h1>}/>
    </Routes>
  )
}

export default App
