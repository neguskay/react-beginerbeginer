import {UPDATE_USER} from '../actions/UserAction';

export default function usersReducer( state= "", {type, payload}){
    switch(type){
        case UPDATE_USER:
            return payload.user;
        
        default: 
            return state;
    }
    //return state;
}

