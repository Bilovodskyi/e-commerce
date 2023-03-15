import {
    Drawer,
    Stack,
    Box,
    Typography,
    List,
    ListItem,
    styled,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

import { useDispatch } from "react-redux";
import { changeCurrency } from "../redux/currencySlice";

const NavbarDrawerCountry = ({ open, setOpen }) => {
    const dispatch = useDispatch();

    const CustomListItem = styled(ListItem)({
        fontSize: "0.75rem",
        textDecoration: "underline",
        cursor: "pointer",
    });
    return (
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
            <Stack
                direction="row"
                justifyContent="space-between"
                borderBottom="1px solid #ccc"
                sx={{ width: { xs: "100vw", sm: "auto" } }}>
                <Typography
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        p: "20px 40px",
                        fontSize: "1.3rem",
                        textTransform: "uppercase",
                        fontWeight: "600",
                    }}>
                    Pick a Currency
                </Typography>
                <Box
                    p="20px"
                    alignItems="center"
                    justifyContent="center"
                    borderLeft="1px solid #ccc"
                    sx={{ cursor: "pointer" }}
                    onClick={() => setOpen(false)}>
                    <CloseIcon sx={{ fontSize: "2rem" }} />
                </Box>
            </Stack>
            <List sx={{ width: "400px", pl: "20px" }}>
                <ListItem sx={{ mt: "10px", mb: "10px" }}>
                    North America:
                </ListItem>
                <CustomListItem
                    onClick={() => {
                        dispatch(
                            changeCurrency({
                                currency: "CAD",
                                country: "Canada",
                            })
                        );
                        setOpen(false);
                    }}>
                    Canada (Canadian Dollar)
                </CustomListItem>
                <CustomListItem
                    onClick={() => {
                        dispatch(
                            changeCurrency({
                                currency: "USD",
                                country: "United States",
                            })
                        );
                        setOpen(false);
                    }}>
                    United States of America (US Dollar)
                </CustomListItem>
                <CustomListItem
                    onClick={() => {
                        dispatch(
                            changeCurrency({
                                currency: "MXN",
                                country: "Mexico",
                            })
                        );
                        setOpen(false);
                    }}>
                    Mexico (Mexican Peso)
                </CustomListItem>

                <ListItem sx={{ mt: "30px", mb: "10px" }}>Europe:</ListItem>
                <CustomListItem
                    onClick={() => {
                        dispatch(
                            changeCurrency({
                                currency: "GBP",
                                country: "United Kingdom",
                            })
                        );
                        setOpen(false);
                    }}>
                    United Kingdom (Pound Sterling)
                </CustomListItem>
                <CustomListItem
                    onClick={() => {
                        dispatch(
                            changeCurrency({
                                currency: "EUR",
                                country: "European Union ",
                            })
                        );
                        setOpen(false);
                    }}>
                    European Union (Euro)
                </CustomListItem>
                <CustomListItem
                    onClick={() => {
                        dispatch(
                            changeCurrency({
                                currency: "CHF",
                                country: "Switzerland",
                            })
                        );
                        setOpen(false);
                    }}>
                    Switzerland (Swiss Franc)
                </CustomListItem>
                <CustomListItem
                    onClick={() => {
                        dispatch(
                            changeCurrency({
                                currency: "PLN",
                                country: "Poland",
                            })
                        );
                        setOpen(false);
                    }}>
                    Poland (Polish Zloty)
                </CustomListItem>
                <ListItem sx={{ mt: "30px", mb: "10px" }}>
                    Asia and Oceania:
                </ListItem>
                <CustomListItem
                    onClick={() => {
                        dispatch(
                            changeCurrency({
                                currency: "JPY",
                                country: "Japan",
                            })
                        );
                        setOpen(false);
                    }}>
                    Japan (Japanese Yen)
                </CustomListItem>
                <CustomListItem
                    onClick={() => {
                        dispatch(
                            changeCurrency({
                                currency: "AUD",
                                country: "Australia",
                            })
                        );
                        setOpen(false);
                    }}>
                    Australia (Australian Dollar)
                </CustomListItem>
            </List>
        </Drawer>
    );
};

export default NavbarDrawerCountry;
