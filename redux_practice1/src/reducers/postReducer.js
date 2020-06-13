import { FETCH_POSTS, NEW_POST } from '../actions/types';

// this will represent the post that will come in from the action.

const initialState = {
    items: [],
    item: {}
}

// takes in action which will include a type that is evaluated. common type is to
// use a switch

// the reducer is returning the state with the items that has been fetch and goes
// to Posts component 

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}