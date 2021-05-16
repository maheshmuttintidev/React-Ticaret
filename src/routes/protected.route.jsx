
import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export const ProtectedRoute = ({component: Component, ...rest}) => {
    const isResponseDataExists = JSON.parse(sessionStorage.getItem('userData'))?.token ? true : false
    return (
        <Route {...rest} render={ props => {
            if(isResponseDataExists) {
                return <Component {...props} />
            } else {
                return (
                    <Redirect to={
                        {
                            pathname: "/login",
                            state: {
                                from: props.location
                            }
                        }
                    } />
                )
            }
        }} />
    )
}