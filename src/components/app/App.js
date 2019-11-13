import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {HomePage, CartPage} from "../pages";
import ShopHeader from '../shop-header';

class App extends Component {
    render() {
        return (
            <main role="main" className="container">
                <ShopHeader numItems={5} total={210}/>
                <Switch>
                    <Route
                        path="/"
                        component={HomePage}
                        exact />

                    <Route
                        path="/cart"
                        component={CartPage}
                    />
                </Switch>
            </main>
        );
    }
}

export default App;