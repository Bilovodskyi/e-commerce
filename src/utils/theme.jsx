import { createTheme } from "@mui/material";
import { MaterialDesignContent } from "notistack";
import { styled } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#000",
        },
        secondary: {
            main: "#041E3A",
        },
        warning: {
            main: "#ad0505",
        },
        w: {
            main: "#fff",
        },
    },
    typography: {
        fontSize: "0.8rem",
    },
    components: {
        //Name of the component
        MuiTypography: {
            styleOverrides: {
                //Name of slot
                root: {
                    letterSpacing: "1.5px",
                    fontWeight: "300",
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                },
            },
        },
    },
});

export const StyledSnack = styled(MaterialDesignContent)(() => ({
    "&.notistack-MuiContent-info": {
        backgroundColor: "#DC965A",
        borderRadius: "0",
    },
    "&.notistack-MuiContent-success": {
        backgroundColor: "#000",
        color: "#fff",
        borderRadius: "0",
    },
    "&.notistack-MuiContent-error": {
        backgroundColor: "#fff",
        color: "#041E3A",
        borderRadius: "0",
    },
    fontSize: "0.7rem",
}));
