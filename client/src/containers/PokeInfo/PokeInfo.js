import './PokeInfo.css'

export default function PokeInfo({pokeData, isError}){
  const pokeId = String(pokeData.id).padStart(4, '0')
  let pokeName = pokeData.name
  pokeName = pokeName[0].toUpperCase() + pokeName.slice(1).toLowerCase()
  return (
    <aside
      className={
        'poke-info' + 
        (pokeData.isLegendary ? ' legendary' : '')
      }
    >
      <small>
      {isError ? ('We couldn\'t find that one.  How about:') : ''}
      </small>
      <h3>{pokeId}: {pokeName}</h3>
      <p>{pokeData.description}</p>
    </aside>
  )
}