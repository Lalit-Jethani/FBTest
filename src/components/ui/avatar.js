import React from "react";

const Avatar = props => {
    const { src, alt, href } = props;
    return (
        <a href={href}>
            <img src={src} alt={alt} className="avatar" />
        </a>
    );
};

export default Avatar;
