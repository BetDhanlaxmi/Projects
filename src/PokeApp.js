import React from 'react';
import PokemonList from './PokemonList';
import {pokeapp} from './App.css';

class PokeApp extends React.Component{
    render(){
      return <div className="pokeapp">
        <h1> The PokeDex </h1>
        <PokemonList/>
      </div>;
    }
  }

  export default PokeApp;