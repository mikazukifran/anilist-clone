import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/core/header";
import Footer from "./components/core/footer";

import Homepage from "./pages/page_homepage";
import Show from "./pages/page_show";
import {
    CssBaseline,
    ThemeProvider,
    createMuiTheme,
    responsiveFontSizes,
} from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "./hooks";
import { setDarkMode } from "./state/accountSlice";

const App = () => {
    const dispatch = useAppDispatch();
    const prefersDarkMode = localStorage.getItem("theme");
    if (!prefersDarkMode) localStorage.setItem("theme", "light");
    if (prefersDarkMode === "dark") {
        dispatch({ type: setDarkMode.toString(), payload: true });
    } else {
        dispatch({ type: setDarkMode.toString(), payload: false });
    }

    const themeMode = useAppSelector((state) => state.isUsingDarkMode);
    let theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: themeMode ? "dark" : "light",
                },
            }),
        [themeMode]
    );

    theme = responsiveFontSizes(theme);

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <CssBaseline />
                <Header />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/anime/:id" component={Show} />
                    <Route exact path="/character/:id" />
                </Switch>
                <Footer />
            </Router>
        </ThemeProvider>
    );
};

export default App;
