import React from 'react'
import { Switch, Route} from 'react-router-dom'

//! import components here
import Categories from './components/Categories/Categories'

export default (
    <Switch>
        <Route exact path ='/' component={Categories} />
    </Switch>
)

// /category/:id - Topics

// /category/:id/:id - Deck

// /user/profile -- profile

// /user/cards -- created cards