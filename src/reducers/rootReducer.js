import { combineReducers } from "redux-immutable";
import { uiReducer } from './ui'
import { charactersReducer } from './characters'

const rootReducer= combineReducers({
    data: charactersReducer,
    ui: uiReducer,

})

export default rootReducer