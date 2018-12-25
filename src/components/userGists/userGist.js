import React from "react";

const UserGistList = props => {
    const { picture } = props;

    return (
       <img style = {{height:"80px", width:"80px"}} src={picture} alt="some text"> </img>
    );
};

export default UserGistList;
