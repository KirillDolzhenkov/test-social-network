import React from "react";

type ContentPropsType = {}

const Content: React.FC<ContentPropsType> = (props) => {
    return (
        <div className={"content"}>
            Content
        </div>
    )
}

export {
    Content
}