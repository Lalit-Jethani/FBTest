import React from "react";
import UserGist from "./userGist";

const UserGistList = props => {
    const { gists, error, user } = props;

    return (
        <div>
            {gists.length && !error ? (
                <div className="userGistDetails">
                    <h3 className="heroLabel">Public gists by {user}</h3>
                    {gists.map(gist => {
                        return <UserGist key={gist.id} gist={gist} />;
                    })}
                </div>
            ) : null}
        </div>
    );
};

export default UserGistList;
