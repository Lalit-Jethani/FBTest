import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import PropTypes from "prop-types";

class ErrorHandler extends Component {
    constructor(props) {
        super(props);
        this.state = { showError: true };
    }

    componentWillReceiveProps(){
       this.setState({showError:true})
    }


    handleDismiss = () => {
        this.setState({ showError: false });
    };

    render() {
        return this.state.showError && this.props.showError ? (
            <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
                <h4>{this.props.errorMessage}</h4>
            </Alert>
        ) : null;
    }
}

ErrorHandler.propTypes = {
    showError: PropTypes.bool,
    errorMessage: PropTypes.string
};

export default ErrorHandler;
