import React from "react";
import Tags from "../../components/Tags/tags";
import { Link } from "react-router-dom";

const UserGistList = props => {
    const { gist } = props;

    return (
        <Link to={`/gist/${gist.id}`}>
            <div className="usergist">
                {gist.description ? gist.description : "No Description"}
                <Tags gist={gist} />
            </div>
        </Link>
    );
};

export default UserGistList;
