import { ActionTypes } from "../constants/actionTypes";

export const setUser=(users)=>{
    return{
        type:ActionTypes.SET_USER,
        users
    };
};

// export const selectedUser=(users)=>{
//     return{
//         type:ActionTypes.SELECTED_USER,
//         users
//     };
// };