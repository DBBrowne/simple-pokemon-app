import storedData from './data/pokemonEntrypoints.js'


let cache = {}
const cacheIndex = {}

function init(){
  cache = storedData
  cache.forEach((pokemon, index) => {
    pokemon.id = index + 1
    cacheIndex[pokemon.name] = index
  })
  // Persist cache data
  global.pokeCache = cache
  global.pokeCacheIndex = cacheIndex
}

function getByName(name){
  return global.pokeCache[global.pokeCacheIndex[name]]
}
function update(pokemon){
  const cacheIndex = global.pokeCacheIndex[pokemon.name]
  global.pokeCache[cacheIndex] = pokemon
  return pokemon
}

export default {
  init,
  getByName,
  update,
}