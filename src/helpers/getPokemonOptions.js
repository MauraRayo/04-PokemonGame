// import { get } from "core-js/core/dict"
import pokemonApi from "@/Api/pokemonApi"

const getPokemons = () => {
    // creamos el array
const pokemonsArr = Array.from (Array(650) )
return pokemonsArr.map( (_ , index) => index + 1)
}

//Mezclamos el array
const getPokemonsOptions = async () => {
    const mixedPokemons = getPokemons()
                         .sort( () => Math.random() - 0.5)

    
    console.log(mixedPokemons)


    //Le pedimos los nombres de los cuatros primeros
    const pokemons = await  getPokemonNames( mixedPokemons.splice (0,4))
    return pokemons

}
const getPokemonNames =  async ( [a,b,c,d] = [] ) =>  {

//  const resp  =  pokemonApi.get(`/1`)
//  console.log(resp)

// console.log(a,b,c,d)
const promiseArr = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`)
]

 const [ p1, p2 ,p3, p4 ] = await promise.all()
 return [
    { name: p1.data.name, id: p1.data.id},
    { name: p2.data.name, id: p2.data.id},
    { name: p3.data.name, id: p3.data.id},
    { name: p4.data.name, id: p4.data.id},
 ]
}

export default getPokemonsOptions