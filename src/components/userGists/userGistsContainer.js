import React, { Component } from "react";
import { connect } from "react-redux";
import UserGistList from "./userGistList";
import Loader from "./../../components/ui/Loader";
import HandleError from "./../../components/hoc/handleError";

const UserGistListErrorHandled = HandleError(UserGistList);

class UserGistsContainer extends Component {
    render() {
        const { isLoading, results, user, error } = this.props.gistsForUser;
        if (isLoading) {
            return <Loader />;
        }

        return (
            <div>
                <UserGistListErrorHandled
                    error={error}
                    gists={results}
                    user={user}
                    isLoading={isLoading}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    gistsForUser: state.gistsForUser
});

export default connect(mapStateToProps)(UserGistsContainer);
