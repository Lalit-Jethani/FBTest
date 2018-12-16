import React, { Component } from 'react';
import Avatar from './../../components/ui/avatar';


export default class Fork extends Component {
    render () {
        const { data } = this.props;
        const user = data.user;
        return (
            <div className="fork">
                <li key={data.id}>
                    <a href={`https://gist.github.com/${data.id}`}>
                        <Avatar src={user.avatar_url} alt={`Avatar for ${user.login}`} />
                        <div>{user.login}</div>
                    </a>
                </li>
            </div>
        );
    }
}

