import CharacterCard from './CharacterCard'

const CharacterList=({characters})=>{
    return(
        <div className='CharacterList'>
            {characters.map((character)=>{
                return <CharacterCard/>
            })}
        </div>
    )
}

CharacterList.defaultProps={
    characters:Array(10).fill(''),
}

export default CharacterList