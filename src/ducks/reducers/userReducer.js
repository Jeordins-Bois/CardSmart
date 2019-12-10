import axios from 'axios'

import {CHECK_SESSION} from '../actionTypes'

const initialState = {
    user: {},
    loggedIn: false
}

export const checkSession = () => {
    let userSession = axios.get('/api/user').then(res => res.data)
    console.log('session', userSession)
    return {
        type: CHECK_SESSION,
        payload: userSession
    }
}

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case CHECK_SESSION + '_PENDING':
            return {...state}
        case CHECK_SESSION + '_FULFILLED':
            return {...state, user: payload, loggedIn: true}
        default:
            return state
    }
}