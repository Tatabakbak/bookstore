import React, {Component} from 'react';
import ErrorIndicator from "../error-indicator";

export default class ErrorBoundry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true});
    }


    render() {
        return this.state.hasError ? <ErrorIndicator/> : this.props.children;
    };
};