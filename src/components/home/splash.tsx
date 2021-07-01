import { makeStyles, createStyles, Theme, Typography, Grid } from "@material-ui/core";
import BG from "../../images/bg_2.jpg";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            backgroundImage: `url(${BG})`,
            height: 400,
            overflow: "hidden",
            backgroundPositionY: "900px",
        },

        title: {
            marginTop: 200,
        },
    })
);

const SplashScreen = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* <Grid container alignItems="center" justify="center">
                <Grid item>
                    <Typography className={classes.title} variant="h1">
                        ANIMOE 2 LA VENDETTA
                    </Typography>
                    <Typography variant="h4" align="center">
                        ciau
                    </Typography>
                </Grid>
            </Grid> */}
        </div>
    );
};

export default SplashScreen;
