import React from "react";
import {Header} from "./Header";

//types:
type HeaderContainerPropsType = {}

//function component:
class HeaderContainer extends React.Component {
    render() {
        return <>
            <Header {...this.props}/>
        </>
    }
}

export {
    HeaderContainer
}