import { combineReducers } from 'redux'

const initialState = {

}

export default combineReducers = (state=initialState, action={}) => {
    
    switch(action.type) {
       case NAME_HERE:
           return { ...state, nameHere: action.payload}
            Default:
                return state
    }
}
