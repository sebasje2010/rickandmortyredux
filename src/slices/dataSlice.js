
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacter } from "../api";
import { setLoading } from "./uiSlice";

const initialState={
    characters:[],
    charactersFiltered:[]
}

export const fetchCharacters=createAsyncThunk(
    'data/fetchCharacters', 
    async(_,{dispatch})=>{
        dispatch(setLoading(true))
        const charactersRes= await getCharacter()
        dispatch(setCharacters(charactersRes))
        dispatch(setLoading(false))
    }
)

export const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{
        setCharacters:(state,action)=>{
            state.characters=action.payload
            state.charactersFiltered=action.payload
        },
        setFavorite:(state,action)=>{
            const currentCharacterIndex=state.characters.findIndex(character=>{
                return character.id===action.payload.characterId
            })
            if (currentCharacterIndex>=0){
                const isFavorite=state.characters[currentCharacterIndex].favorite
                state.characters[currentCharacterIndex].favorite=!isFavorite
                state.charactersFiltered[currentCharacterIndex].favorite=!isFavorite
            }
        },
        setFilter: (state, action) => {
            const charactersFiltered = state
                .characters
                .filter( character => character.name.toLowerCase().includes( action.payload ) )
            state.charactersFiltered = charactersFiltered;
        }
    }
})

export const { setFavorite, setCharacters, setFilter } = dataSlice.actions

export default dataSlice.reducer