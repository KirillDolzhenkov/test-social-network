import React from "react";

//types
type ErrorBoundaryPropsType = {}

//class component
class ErrorBoundary extends React.Component<ErrorBoundaryPropsType> {
    state = {hasError: false}

    //catch errors anywhere in child component tree:
    static getDerivedFromError(error: Error) {
        console.log(error);
        return {hasError: false}
    }

    //show errors info:
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log(" Logging to external log service ...", error, errorInfo);
    }

    render() {
        return this.state.hasError
            ? <h1>Something went wrong</h1>
            : this.props.children
    }
}

export {
    ErrorBoundary
}