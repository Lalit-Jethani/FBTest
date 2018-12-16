import React from 'react';

export const formulateTagsForGist = (gist) => {
    const files = Object.values(gist.files);
    const tags = new Set();
    const arr = [];
    let cnt = 0;
    for (let file of files) {
        const tag = file.language || 'Plain Text';
        if (!tags.has(tag)) {
            cnt++;
            arr.push(<div key={cnt} className={"tags"}>{tag}</div>);
            tags.add(tag);
        }
    }
    return arr;
}
