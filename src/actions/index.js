import React from 'react'

export const setFavorite = (payload) => (
    {
        type: 'SET_FAVORITE',
        payload: payload
    }
);

export const delFavorite = (payload) => (
    {
        type: 'DELETE_FAVORITE',
        payload: payload
    }
);

export const loginRequest = (payload) => (
    {
        type: 'LOGIN_REQUEST',
        payload: payload
    }
);


export const logoutRequest = (payload) => (
    {
        type: 'LOGOUT_REQUEST',
        payload: payload
    }
);

export const registerRequest = (payload) => (
    {
        type: 'REGISTER_REQUEST',
        payload: payload
    }
);

export const getVideoSource = (payload) => (
    {
        type: 'GET_VIDEO_SOURCE',
        payload: payload
    }
);

