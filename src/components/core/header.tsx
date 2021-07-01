import {
    AppBar,
    Toolbar,
    Button,
    Typography,
    makeStyles,
    createStyles,
    Theme,
    Switch,
} from "@material-ui/core";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setDarkMode } from "../../state/accountSlice";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },

        styledBar: {
            backgroundColor: "#1f1f1f",
        },

        title: {
            flexGrow: 1,
            fontSize: 20,
        },

        button: {
            fontSize: 20,
        },
    })
);

const Header: React.FC = () => {
    const classes = useStyles();

    const themeMode = useAppSelector((state) => state.isUsingDarkMode);
    const dispatch = useAppDispatch();

    function handleTheme(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.currentTarget.checked) {
            localStorage.setItem("theme", "dark");
            dispatch({ type: setDarkMode.toString(), payload: true });
        } else {
            localStorage.setItem("theme", "light");
            dispatch({ type: setDarkMode.toString(), payload: false });
        }
    }

    return (
        <div className={classes.root}>
            <AppBar classes={{ root: classes.styledBar }} position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="button" component="h2">
                        AniListClone
                    </Typography>
                    <WbSunnyIcon />
                    <Switch
                        color="default"
                        defaultChecked={themeMode}
                        onChange={handleTheme}
                    />
                    <Brightness2Icon />
                    <Button color="inherit" size="large">
                        Home
                    </Button>
                    <Button color="inherit" size="large">
                        Browse
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
