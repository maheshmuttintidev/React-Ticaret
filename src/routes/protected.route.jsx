
import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export const ProtectedRoute = ({component: Component, ...rest}) => {
    const isUserLoggedIn = sessionStorage.getItem("userData")
    return (
        <Route {...rest} render={ props => {
            if(isUserLoggedIn) {
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