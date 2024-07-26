import React, { ErrorInfo } from "react";
import ToastMessageHandler from "./components/ToastMessageHandler";
import ErrorMessageHandler from "./components/ErrorMessageHandler";
import { ErrorHandlerProps, ErrorHandlerState } from "./types";

/**
 * Represents an error handler component that can display different types of error messages or fallback UI.
 */
class ErrorHandler extends React.Component<
    ErrorHandlerProps,
    ErrorHandlerState
> {
    /**
     * Creates an instance of ErrorHandler.
     * @param {ToastMessageHandlerProps} props - The props for the ErrorHandler component.
     */
    constructor(props: ErrorHandlerProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    /**
     * Updates the state when an error is thrown.
     * @param {Error} error - The error object.
     * @returns {ErrorHandlerState} The updated state.
     */
    static getDerivedStateFromError(error: Error): ErrorHandlerState {
        console.log("getDerivedStateFromError Error: ", error);
        return { hasError: true, error, errorInfo: null };
    }

    /**
     * Handles the caught error.
     * @param {Error} error - The error object.
     * @param {ErrorInfo} errorInfo - The error information object.
     */
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log("componentDidCatch Error: ", error);
        if (!this.state.hasError) {
            this.setState({
                hasError: true,
                error,
                errorInfo,
            });
        }
    }

    /**
     * Renders the error handler component.
     * @returns {React.ReactNode} The rendered component.
     */
    render(): React.ReactNode {
        const {
            customErrorMsg,
            customSecondaryMsg,
            refreshPage,
            fallbackUI,
            type,
            errorBackgroundColor,
        } = this.props;
        const { error, errorInfo, hasError } = this.state;

        if (type === "FALLBACK" && fallbackUI && hasError) {
            return fallbackUI;
        }

        if (type === "TOAST" && hasError) {
            return (
                <ToastMessageHandler
                    error={error}
                    errorBackgroundColor={errorBackgroundColor}
                    customErrorMsg={customErrorMsg}
                    refreshPage={refreshPage}>
                    {this.props.children}
                </ToastMessageHandler>
            );
        }

        if (hasError) {
            return (
                <ErrorMessageHandler
                    error={error}
                    errorInfo={errorInfo}
                    customErrorMsg={customErrorMsg}
                    customSecondaryMsg={customSecondaryMsg}
                    refreshPage={refreshPage}
                />
            );
        }

        return this.props.children;
    }
}

export default ErrorHandler;
