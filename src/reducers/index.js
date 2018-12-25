import { combineReducers } from 'redux'
import gistsForUser from './gistsUser_Reducer'
import gistInfo from './gist_Reducer'
import fbData from './fbData_Reducer'

const rootReducer = combineReducers({
    gistsForUser,
    gistInfo,
    fbData
})

export default rootReducer