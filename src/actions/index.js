import { SET_CHARACTERS, SET_FAVORITE, SET_LOADING } from "./types";

export const setCharacters=(payload)=>({
    type:SET_CHARACTERS,
    payload
})

export const setLoading=(payload)=>({
    type:SET_LOADING,
    payload
})

export const setFavorite=(payload)=>({
    type:SET_FAVORITE,
    payload
})