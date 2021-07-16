import React from 'react'
import axios from 'axios'
import api from '../../api/api'
import { authReducerActionTypes } from './reducer'

export const login = (username, password) => {
    return (dispatch) => {
        return new Promise(async (resolve, reject) => {
            try{
                const {data} = await api.post('/login', {
                    username, password
                });

                localStorage.setItem('token', data.token)
                dispatch({
                    type: authReducerActionTypes.LOGIN,
                    data: {username: data.username, email: data.email}
                })
            } catch (error) {
                console.log(error)
            }
        })
    }
    
}
export const loginToken = (username, password) => {
    return (dispatch) => {
        return new Promise(async (resolve, reject) => {
            try{
                const {data} = await api.post('/login', {
                    username, password
                });

                localStorage.setItem('token', data.token)
                dispatch({
                    type: authReducerActionTypes.LOGIN,
                    data: {username: data.username, email: data.email}
                })
            } catch (error) {
                console.log(error)
            }
        })
    }
    
}
export const logout = () => ({
    type: authReducerActionTypes.LOGOUT,
})