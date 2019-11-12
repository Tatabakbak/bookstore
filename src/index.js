import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import App from "./components/app";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import BookstoreService from "./services/bookstore-service";
import {BookstoreServiceProvider} from "./components/bookstore-service-context";

const bookstoreService = new BookstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookstoreServiceProvider value={bookstoreService}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root'));