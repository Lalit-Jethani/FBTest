import React from "react";

const Photos = props => {
    const { picture } = props;

    return (
        <div className="picStyle">
       <img  src={picture} alt="some text"/>
       </div>
    );
};

export default Photos;
