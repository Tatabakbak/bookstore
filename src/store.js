import {createStore} from "redux";
import reducer from "./reducers";

const store = createStore(reducer);
export default store;

/*
//ENHANCERS:
import {compose} from "redux";

const stringEnhancer = (createStore) => (...args) => {
    const store = createStore(...args);
    const originalDispatch = store.dispatch;
    store.dispatch = (action) => {
        if (typeof action === 'string') {
            return originalDispatch({
                type: action
            });
        }
        return originalDispatch(action);
    };
    return store;
};

const logEnhancer = (createStore) => (...args) => {
    const store = createStore(...args);
    const originalDispatch = store.dispatch;
    store.dispatch = (action) => {
        console.log(action.type);
        return originalDispatch(action);
    };
    return store;
};

const store = createStore(reducer, compose(stringEnhancer, logEnhancer));
*/

/*
//MIDDLEWARE:
import {applyMiddleware} from "redux";

const logMiddleware = (store) => (dispatch) => (action) => {
    console.log(action.type, store.getState());
    return dispatch(action);
};

const stringMiddleware = () => (dispatch) => (action) => {
    if (typeof action === 'string') {
        return dispatch({type: action});
    }
    return dispatch(action);
};

const store = createStore(reducer, applyMiddleware(stringMiddleware, logMiddleware));
store.dispatch('HELLO_WORLD');
*/

/*
//THUNK:
import thunkMiddleware from 'redux-thunk';

const myAction = (dispatch) => {
    setTimeout(() => dispatch({type: 'DELAYED_ACTION'}), 2000);
};

const delayedActionCreator = (timeout) => (dispatch) => {
    setTimeout(() => dispatch({type: 'DELAYED_ACTION'}), timeout);
};

const store = createStore(reducer, applyMiddleware(logMiddleware, thunkMiddleware));
store.dispatch(delayedActionCreator(3000));
*/