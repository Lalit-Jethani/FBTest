import { combineReducers } from 'redux'
import gistsForUser from './gistsUser_Reducer'
import gistInfo from './gist_Reducer'

const rootReducer = combineReducers({
    gistsForUser,
    gistInfo
})

export default rootReducer