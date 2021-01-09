import { createStore } from 'redux';

const ADD_TRACK = 'ADD_TODO';

const initialState = [
    'Learn JavaScript',
    'Drink Coffee'
];

function playlist(state = [], action) {
    if (action.type === ADD_TRACK) {
        return [...state, action.payload]
    }
    return state;
}

const store = createStore(playlist);

initialState.forEach(state => {
    store.dispatch({ type: ADD_TRACK, payload: state });
});

export default store;