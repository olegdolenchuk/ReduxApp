import { createStore, applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './redux/rootReducer';
import { INCREMENT, DECREMENT } from './redux/types';
import { increment, decrement, asyncIncrement, changeTheme } from './redux/actions';
import './styles.css';

const counter  = document.getElementById('counter');
const addBtn  = document.getElementById('add');
const subBtn  = document.getElementById('sub');
const asyncBtn  = document.getElementById('async');
const themeBtn = document.getElementById('theme');

let dispatchBtn;

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

addBtn.addEventListener('click', () => {
    store.dispatch(increment());
});

subBtn.addEventListener('click', () => {
    store.dispatch(decrement());
});

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement());
});   

themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light')
    ? 'dark'
    : 'light' ;
    store.dispatch(changeTheme(newTheme));
});


store.subscribe(() => {
    const state = store.getState();
    counter.textContent = state.counter.number;
    document.body.className = state.theme.value;
    [addBtn, subBtn, asyncBtn, themeBtn].forEach(btn => {
        btn.disabled = state.counter.disable;
    });
});

store.dispatch({type: 'INIT__APP'});
