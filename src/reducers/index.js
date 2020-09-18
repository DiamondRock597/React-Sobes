
import { combineReducers } from 'redux'
import dataReducer from './dataReducer'
import loadingReducer from './loadingReducer'
import modalReducer from './modalReducer'

const reducer = combineReducers({
    data: dataReducer,
    modal: modalReducer,
    isLoading: loadingReducer,


})

export default reducer

