import React from "react";
import { ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme, StyledSnack } from "./utils/theme";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { SnackbarProvider } from "notistack";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
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
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
