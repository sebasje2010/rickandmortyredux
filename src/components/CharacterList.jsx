import CharacterCard from './CharacterCard'

const CharacterList=({characters})=>{
    return(
        <div className='CharacterList'>
            {characters.map((character)=>{
                return <CharacterCard 
                name={character.name} 
                key={character.id} 
                image={character.image} 
                species={character.species} 
                id={character.id}
                favorite={character.favorite}/>
            })}
        </div>
    )
}

CharacterList.defaultProps={
    characters:Array(10).fill(''),
}

export default CharacterList