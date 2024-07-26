# react-error-shield

The `react-error-shield` is a robust React component designed to enhance application stability by providing a comprehensive error handling mechanism. It acts as a protective layer around your React components, gracefully capturing errors and displaying user-friendly fallback interfaces or messages, without crashing the entire application.

## Key Features

-   **Versatile Error Handling** : Supports various error handling strategies including `toast notifications`, `custom error page`, and `fallback UI component`.

-   **Customizable** : Offers extensive customization options for error messages, background colors, and more, allowing for a seamless integration with your application's design.

-   **Automatic Page Refresh Option** : Can refresh the page on error, providing a quick way for users to recover from unexpected issues.

-   **Developer Friendly** - Simplifies the debugging process by providing clear and concise error information, making it easier to identify and fix issues.

---

## Installation

To install `react-error-shield`, use npm:

```bash
npm install react-error-shield
```

## Usage/Examples

```javascript
import ErrorBoundary from "react-error-shield";

function App() {
    return (
        <ErrorBoundary type='TOAST'>
            <App />
        </ErrorBoundary>
    );
}
```

### Toast

```javascript
<ErrorBoundary
    type='TOAST'
    errorBackgroundColor='RED'
    customErrorMsg='Something went wrong! Please try again.'
    refreshPage>
    // ---- child components ---
</ErrorBoundary>
```

### Error

```javascript
<ErrorBoundary
    type='ERROR'
    errorBackgroundColor='RED'
    customErrorMsg='Something went wrong! Please try again.'
    customSecondaryMsg='This is a secondary message.'
    refreshPage>
    // ---- child components ---
</ErrorBoundary>
```

### Fallback UI

```javascript
<ErrorBoundary
    type='FALLBACK'
    fallbackUI={<div>Something went wrong! Please try again.</div>}>
    // ---- child components ---
</ErrorBoundary>
```

## Props

The following props are expected:

| Props                | Required |              Value               |      Default       |
| -------------------- | :------: | :------------------------------: | :----------------: |
| type                 |  `true`  | `TOAST` or `FALLBACK` or `ERROR` |                    |
| errorBackgroundColor | `false`  |   `RED` or `YELLOW` or `GREEN`   |       `RED`        |
| customErrorMsg       | `false`  |             `string`             | Original Error Msg |
| customSecondaryMsg   | `false`  |             `string`             | Original Error Msg |
| refreshPage          | `false`  |            `boolean`             |                    |
| fallbackUI           | `false`  |        `React Component`         |                    |

If the type is **FALLBACK**, the `fallbackUI` prop is expected. If not passed, it will default to the **ERROR** behavior.

The `customSecondaryMsg` prop only works with the type set to **ERROR**.

---
