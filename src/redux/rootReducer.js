import {INCREMENT, DECREMENT, CNANGE_THEME, TOGGLE_DISABLE} from './types';
import { combineReducers } from 'redux';

const initCounterState = {
    number: 0,
    disable: false
}

function counterReducer(state = initCounterState, action) {
    switch (action.type) {
        case INCREMENT:
            return {...state, number: state.number + 1}
        case DECREMENT:
            return {...state, number: state.number - 1}
        case TOGGLE_DISABLE:
            return {...state, disable: !state.disable}
        default: 
            return state;
    }
}

const initThemeState = {
    value: 'light'
}

function themeReducer(state = initThemeState, action){
    switch (action.type) {
        case CNANGE_THEME:
            return {...state, value: action.payload}
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
});