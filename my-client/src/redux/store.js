import React from 'react';
import produce from 'immer';
import { createStore } from 'redux';

const initialState = {
    user: [],
    post: [],
    megazin: []

}
const reducer = produce((state, action) => {

    switch (action.type) {
        case 'GET_ALL_MEGAZIN_BY_USER_ID':
            {
                state.megazin = action.payload;
            } break;
        case 'GET_ALL_POST_BY_MEGAZIN_ID':
            {
                state.post = action.payload;
            } break;
        case 'GET_ALL_USER':
            {
                state.user = action.payload;
            } break;
    }
}, initialState)

const store = createStore(reducer);
window.store = store;
export default store;