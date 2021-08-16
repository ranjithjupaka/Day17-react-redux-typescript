import { Action } from '../actions/index'
import { ActionTypes } from '../actionTypes';

const initialState = 0;

const reducer = (state:number = initialState,action:Action) => {
    switch (action.type) {
        case ActionTypes.DEPOSIT:
            return state + action.payload 
        case ActionTypes.WITHDRAW:
            return state - action.payload
        case ActionTypes.BANKRUPT:
            return 0;
        default:
            return state ;
    }
}

export default reducer;