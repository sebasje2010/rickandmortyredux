import CharacterCard from './CharacterCard'
import { Link } from 'react-router-dom';
const CharacterList=({characters})=>{
    return(
        <div className='CharacterList'>
            {characters.map((character)=>{
                return <Link to={`/character/${character.id}`} key={character.id}>
                    <CharacterCard 
                    name={character.name} 
                    key={character.id} 
                    image={character.image} 
                    species={character.species} 
                    id={character.id}
                    favorite={character.favorite}>
                    </CharacterCard>
                </Link>
            })}
        </div>
    )
}

export default CharacterList