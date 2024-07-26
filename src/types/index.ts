import { ErrorInfo, ReactNode } from "react";

export enum ErrorBGColors {
    RED = "#ff6f64fa",
    YELLOW = "#c9aa3ffa",
    GREEN = "#6bba49fa",
}

export interface ToastMessageHandlerProps {
    children: ReactNode;
    customErrorMsg?: string;
    refreshPage?: boolean;
    error: Error | null;
    errorBackgroundColor?: keyof typeof ErrorBGColors;
}

export interface ErrorMessageHandlerProps {
    error: Error | null;
    errorInfo: React.ErrorInfo | null;
    customErrorMsg?: string;
    refreshPage?: boolean;
    customSecondaryMsg?: string;
}

type ErrorDisplayType = "TOAST" | "FALLBACK" | "ERROR";

export interface ErrorHandlerProps {
    children: ReactNode;
    type: ErrorDisplayType;
    customErrorMsg?: string;
    customSecondaryMsg?: string;
    errorBackgroundColor?: keyof typeof ErrorBGColors;
    refreshPage?: boolean;
    fallbackUI?: React.ReactNode;
}

export interface ErrorHandlerState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}
