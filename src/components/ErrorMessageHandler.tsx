import React from "react";
import { ErrorMessageHandlerProps } from "../types";
import "../styles/styles.css";

const ErrorMessageHandler = ({
    error,
    errorInfo,
    customErrorMsg,
    customSecondaryMsg,
    refreshPage,
}: ErrorMessageHandlerProps) => {
    const reloadPage = () => {
        window.location.reload();
    };
    return (
        <div className='error-message-container '>
            <div className='error-message-box'>
                <div>
                    <h1 className='error-message-heading '>
                        {customErrorMsg
                            ? customErrorMsg
                            : error && error.toString()}
                    </h1>
                    <details style={{ whiteSpace: "pre-wrap" }}>
                        {customSecondaryMsg
                            ? customSecondaryMsg
                            : error && error.toString()}
                        <br />
                        {errorInfo?.componentStack}
                    </details>
                </div>
                {refreshPage && (
                    <button
                        onClick={reloadPage}
                        style={{ color: "black" }}
                        className='reload-button'>
                        Page Reload
                    </button>
                )}
            </div>
        </div>
    );
};

export default ErrorMessageHandler;
