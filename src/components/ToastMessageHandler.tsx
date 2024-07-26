import React from "react";
import { ToastMessageHandlerProps, ErrorBGColors } from "../types";

import "../styles/styles.css";

const ToastMessageHandler = ({
    children,
    customErrorMsg,
    refreshPage,
    error,
    errorBackgroundColor,
}: ToastMessageHandlerProps) => {
    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className='toast-container'>
            <div
                className='toast-message'
                style={{
                    backgroundColor:
                        ErrorBGColors[errorBackgroundColor || "RED"],
                }}>
                {customErrorMsg
                    ? customErrorMsg
                    : error?.message && "Something went wrong!"}
                {refreshPage && (
                    <button className='reload-button' onClick={reloadPage}>
                        Reload
                    </button>
                )}
            </div>
            {children}
        </div>
    );
};

export default ToastMessageHandler;
