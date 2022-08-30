import { ActionTypes } from "../constants/actionTypes";

const initialState={
    users:[],
};

export const userReducer= (state=initialState,action) =>{
    switch (action.type) {
        case ActionTypes.SET_USER:
             return {...state,users:[...state.users,...action.users]}
        
        case ActionTypes.SELECTED_USER:
            return {...state}

        default:

            return state
    }
}

