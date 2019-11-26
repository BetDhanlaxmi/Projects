import React from 'react';
import {render} from 'react-dom';
import {pokemonspecies,pokemonspeciescontainer,pokemonspeciessprite,pokemonspeciesname} from './App.css';

//The Pokemon component will show an individual Pokemon monster
// It shows an image of the Pokemon and
// shows the name of it as well.
class Pokemon extends React.Component{
   render(){
      const {pokemon,id} = this.props;
      return <div className="pokemonspecies">
              <div className="pokemonspeciescontainer">
                  <span>{pokemon.key}</span>
                <div className="pokemonspeciessprite">
                   <img src={process.env.PUBLIC_URL + `/pokemon/${id}.png`} /> 
                </div>
                <div className="pokemonspeciesname"> {pokemon.name} </div>
              </div>
            </div>;
      }
  }

  export default Pokemon;