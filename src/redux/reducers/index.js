import { combineReducers } from "redux";
import { userReducer, SelectedUserReducer } from "./usersReducer";


const reducers=combineReducers({
    allUsers:userReducer,
});

export default reducers;