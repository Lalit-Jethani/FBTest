import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGist } from './../../actions/gist_Action';
import GistDetails from './../../components/GistDetails/GistDetails';
import Fork from './../../components/GistForks/GistForks';
import Files from './../../components/UserFiles/userFiles';
import Loader from './../../components/ui/Loader';

class Gist extends Component {

    componentDidMount() {
        const gistID = this.props.match.params.gistID;
        this.props.getSingleGist(gistID);
    }

    prepForks(forks) {
        const recentForks = forks.slice(0, 3);
        return (
            recentForks.map((fork) => (
                <Fork key={fork.id} data={fork} />
            ))
        );
    }

    getFileNames(gist) {
        const files = Object.values(gist.files);
        return (
            files.map(({ raw_url, filename }, index) => (
                <Files key={index} link={raw_url} name={filename} />
            ))
        );
    }

    render() {
        const { gistID, isLoading, results, error } = this.props.gistInfo;

        let forks, filesNames;
        if (results.forks) {
            forks = this.prepForks(results.forks);
        }
        if (results.files) {
            filesNames = this.getFileNames(results);
        }

        if (isLoading) {
            return (
                <Loader />
            );
        } else {
            return (
                <div>
                    {gistID && !error ?
                        <GistDetails gist={results} forks={forks} filesNames={filesNames} />
                        :
                        null
                    }
                </div>
            );

        }

    }
}

const mapStateToProps = state => ({
    gistInfo: state.gistInfo
});

const mapDispatchToProps = (dispatch) => {
    return {
        getSingleGist: (gistId) => dispatch(getGist(gistId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Gist);
