import React from 'react';
import Pokemon from './Pokemon';
import {pokemonspecieslist} from './App.css';

//The PokemonList component shows nothing when it mounts for the first time. 
//But right before it mounts on to the DOM, it makes an 
//API call to fetch the first 151 Pokemon from the API and 
//then displays them using the Pokemon Component

class PokemonList extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        species : [],
        fetched : false,
        loading : false,
        minIndex : 1,
        maxIndex : 4,
        data : '',
      };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
    next() {
        this.setState({
           minIndex : this.state.maxIndex,
           maxIndex : this.state.maxIndex+3,
        });
      }
      previous() {
        this.setState({
            minIndex : this.state.minIndex-3,
            maxIndex : this.state.maxIndex-3,
         });
      }
    componentWillMount(){
      this.setState({
        loading : true
      });
      fetch('http://pokeapi.co/api/v2/pokemon?limit=151').then(res=>res.json())
      .then(response=>{
          this.setState({
          species : response.results,
          loading : true,
          fetched : true
        });
      });
    }
  
    render(){
      const {fetched, loading, species, minIndex, maxIndex} = this.state;
      const data_list = species.map( function(val,index) {
          return {key:index, value:val}
      });

      this.state.data = data_list.slice(minIndex, maxIndex);
      let content ;
      if(fetched){
        content = <div className="pokemonspecieslist">
          {this.state.data.map((pokemon,index)=><Pokemon key={pokemon.name} id={pokemon.key} pokemon={pokemon}/>)}
          </div>;
      }else if(loading && !fetched){
          content = <p> Loading ...</p>;
      }
      else{
        content = <div/>;
      }
      
      return  <div>
        {content}
        <div>
          
          {this.state.minIndex > 1 ? <button id = "btn_previous" onClick={this.previous}>Previous</button> : ''}

          {this.state.maxIndex != data_list.length ? <button name='Next'onClick={this.next}>Next</button> : ''}
        </div>    
      </div>;
    }
  }


  export default PokemonList;