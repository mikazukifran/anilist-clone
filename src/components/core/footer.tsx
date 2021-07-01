import {
    AppBar,
    makeStyles,
    createStyles,
    Theme,
    Toolbar,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: 100,
            marginTop: 50,
            backgroundColor: "#1f1f1f",
        },

        footerText: {
            marginTop: 25,
        },
    })
);

const Footer = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar className={classes.root} position="sticky">
                <Typography
                    className={classes.footerText}
                    align="center"
                    variant="button"
                >
                    Developed by Fran#3250
                </Typography>
            </AppBar>
        </div>
    );
};

export default Footer;
