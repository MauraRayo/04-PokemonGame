import { get } from "core-js/core/dict"

const getPokemons = () => {
    // creamos el array
const pokemonsArr = Array.from (Array(650) )
return pokemonsArr.map( (_ , index) => index + 1)
}

//Mezclamos el array
const getPokemonsOptions = () => {
    const mixedPokemons = getPokemons()
                         .sort( () => Math.random() - 0.5)
    console.log(mixedPokemons)


    //Le pedimos los nombres de los cuatros primeros
    getPokemonNames( mixedPokemons.splice (0,4))

}
const getPokemonNames = (a,b,c,d = [] ) =>  {
console.log(a,b,c,d)

}

export default getPokemonsOptions