import React from 'react'
import { Switch, Route } from 'react-router-dom'

// PAGES
import { Home, CreateAccount } from 'pages'

const Routes = () => (
    <Switch>

        {/* ///// MAIN ///// */}
        {/* HOME */}
        <Route exact path='/'>
            <Home />
        </Route>

        {/* ///// ACCOUNT ////// */}
        {/* SIGN IN */}
        <Route exact path='/account/create-account'>
            <CreateAccount />
        </Route>

    </Switch>
)

export default Routes