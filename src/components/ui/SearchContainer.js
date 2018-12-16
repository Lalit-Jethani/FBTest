import React, { Component } from "react";
import SearchComponent from "./searchComponent";
import { connect } from "react-redux";
import { getGistsForUser } from "./../../actions/gistsUser_Action";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "", error: "" };
    }

    handleSubmit = event => {
        event.preventDefault();
        let value = this.state.value;
        this.props.getUserGists(value);
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        return (
            <div className="SearchContainer">
                <SearchComponent
                    handleChange={this.handleChange}
                    value={this.state.value}
                    handleSubmit={this.handleSubmit}
                    placeholder={"Please Enter Username"}
                    buttonText = {"Search Gists"}
                />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    gists: state.userGists
});

const mapDispatchToProps = dispatch => {
    return {
        getUserGists: value => dispatch(getGistsForUser(value))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
