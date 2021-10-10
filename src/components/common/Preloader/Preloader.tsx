import React from "react";

import "components/common/Preloader/Preloader.css"
/*import PreloaderLogo from "components/common/Preloader/preloaderLogo.png"*/

type PreloaderPropsType = {
}

const Preloader: React.FC<PreloaderPropsType> = (props) => {
    return (
        /*<div className="Preloader">
            <header className="Preloader-header">
                <img src={PreloaderLogo} className="Preloader-logo" alt="logo"/>
                <br/>
            </header>
        </div>*/
        <h1>
            loading...
        </h1>
    )
}

export {
    Preloader
}
