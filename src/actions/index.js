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

