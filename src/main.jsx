import React from "react";
import { ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme, StyledSnack } from "./utils/theme";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <SnackbarProvider
                    maxSnack={3}
                    Components={{
                        success: StyledSnack,
                        error: StyledSnack,
                        info: StyledSnack,
                    }}>
                    <App />
                </SnackbarProvider>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
