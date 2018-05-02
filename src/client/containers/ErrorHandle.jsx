import React from 'react'

export default class ErrorBoundary extends React.Component {
    componentDidCatch(error, info) {
        console.log(error, info)
        // Display fallback UI
        // this.setState({ hasError: true })
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
    }

    render() {
        return (
            <React.StrictMode>
                {this.props.children}
            </React.StrictMode>
        )
    }
}