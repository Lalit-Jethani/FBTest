import React from 'react';
import Tags from './../../components/Tags/tags';
import Avatar from './../../components/ui/avatar';

const UserGistList = (props) => {

    const { gist, forks, filesNames } = props;

    return (
        <div className="gistCard">
            <h3>Gist info</h3>
            <div>{gist.description ? gist.description : 'No Description'}</div>
            <Tags gist={gist} />
            <div className="gistSection">
                <strong>Files:</strong>
                {filesNames}
            </div>
            <div className="gistSection">
                <strong>Owner:</strong>
                <div className="userProfile">
                    <Avatar href={gist.owner.html_url}
                            src={gist.owner.avatar_url}
                            alt={`Avatar for ${gist.owner.login}`} />
                    <div>{gist.owner.login}</div>
                </div>
            </div>
            {forks.length ?
                <div className="gistSection">
                    <strong>Recent forks:</strong>
                    <div className="forkList">
                        {forks}
                    </div>
                </div>
                :
                <div className="gistSection">
                    <strong>No Forks</strong>
                </div>
            }
        </div>
    );
};

export default UserGistList;
