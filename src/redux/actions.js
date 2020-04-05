import { INCREMENT, DECREMENT, CNANGE_THEME, TOGGLE_DISABLE } from "./types";

export function increment() {
    return {
        type: INCREMENT
    }
};

export function decrement() {
    return {
        type: DECREMENT
    }
};

export function toogleDisable() {
    return {
        type: TOGGLE_DISABLE
    }
};

export function asyncIncrement() {
    return function (dispatch){
        dispatch(toogleDisable());
        setTimeout(() => {
            dispatch(increment());
            dispatch(toogleDisable());
        }, 2000);
    }
};

export function changeTheme(newTheme) {
    return {
        type: CNANGE_THEME,
        payload: newTheme
    }
};