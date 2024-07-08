
// export const PokemonCard = ({ id, name, sprites = [] }) => {
export const PokemonCard = ( {id, name, sprites} ) => {

    // const { id, name, sprites } = data.data;
 

  return (
    <section style={{ height: 200}}>
        <h2 className="text-capitaliza">#{id} - {name}</h2>

        {/* Imagenes */}
        <div>
            {
                sprites.map( sprite => <img key={ sprite }src={ sprite } alt={ name } height={200} /> )
            }
            
        </div>

    </section>
  )
}
