import React from "react";
import {
    Container,
    createStyles,
    Grid,
    makeStyles,
    Typography,
    Theme,
    Card,
    AppBar,
    Toolbar,
    CardMedia,
    Button,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import { GetAnimeFromIdQuery } from "../../generated/graphql";

interface Props {
    data: GetAnimeFromIdQuery | undefined;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            backgroundColor: "#1f1f1f",
        },

        animeTitle: {
            flexGrow: 1,
            fontSize: 18,
        },

        text: {
            flexGrow: 1,
        },
        card: {
            maxWidth: 200,
            marginTop: 200,
            marginLeft: 10,
        },
    })
);

const ShowDetails: React.FC<Props> = ({ data }) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div
                style={{
                    height: 500,
                    background: `url(${data!.Media!.bannerImage})`,
                    backgroundSize: "cover",
                }}
            >
                <Container maxWidth="xl">
                    <Grid container alignItems="flex-start" justify="flex-start">
                        <Grid item>
                            <Card className={classes.card}>
                                <CardMedia
                                    component={"img"}
                                    image={data?.Media?.coverImage?.extraLarge!}
                                    height={250}
                                />
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-end" justify="flex-end" spacing={1}>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<FavoriteIcon />}
                                disableRipple={true}
                                disableElevation={true}
                                disableFocusRipple={true}
                                disableTouchRipple={true}
                            >
                                {data?.Media?.favourites!}
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                startIcon={<ShowChartIcon />}
                                disableRipple={true}
                                disableElevation={true}
                                disableFocusRipple={true}
                                disableTouchRipple={true}
                            >
                                {data?.Media?.averageScore!}%
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>

            <AppBar position="static" classes={{ root: classes.root }}>
                <Toolbar>
                    <Typography variant="button" className={classes.animeTitle}>
                        {data?.Media?.title?.romaji}
                    </Typography>
                    <Typography className={classes.text} variant="overline">
                        Format: {data?.Media?.format}
                    </Typography>
                    <Typography className={classes.text} variant="overline">
                        Status: {data?.Media?.status}
                    </Typography>
                    <Typography className={classes.text} variant="overline">
                        Episodes: {data?.Media?.episodes}
                    </Typography>
                    <Typography className={classes.text} variant="overline">
                        Season: {data?.Media?.season}
                    </Typography>
                    <Typography className={classes.text} variant="overline">
                        Ep. Duration: {data?.Media?.duration} min
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default ShowDetails;
