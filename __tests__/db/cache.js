import cache from '../../src/db/cache.js'

const firstPokemon = {
  'id': 1,
  'name': 'bulbasaur',
  'url': 'https://pokeapi.co/api/v2/pokemon/1/',
}

describe('Cache',()=>{
  it('initialises to global var', ()=>{
    cache.init()

    expect(
      global.pokeCache[0]
    ).toMatchObject(
      firstPokemon
    )
  })

})