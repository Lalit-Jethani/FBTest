import React, { Component } from "react";

export default class File extends Component {
    render() {
        const { link, name } = this.props;
        return (
            <div>
                <a href={link}>{name}</a>
            </div>
        );
    }
}
