import React from "react";
import PropTypes from "prop-types";
import ErrorHandler from "../../components/ui/errorHandler";

function HandleError(Component) {
    return function HandleErrorWrapped({ error, ...props }) {
        HandleErrorWrapped.propTypes = {
            Error: PropTypes.object
        };

        if (error) {
            return (
                <div>
                    <ErrorHandler showError={true} errorMessage={error} />
                </div>
            );
        } else {
            return <Component {...props} />;
        }
    };
}

export default HandleError;
