import React from "react";
import { formulateTagsForGist } from "../../utils/utils";

const Tags = props => {
    const { gist } = props;
    const uniqueTags = formulateTagsForGist(gist);

    return <div>{uniqueTags}</div>;
};

export default Tags;
