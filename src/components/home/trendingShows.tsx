import {
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    makeStyles,
    Theme,
    createStyles,
    Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useGetTrendingAnimesQuery } from "../../generated/graphql";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: { marginTop: 25 },

        CardContainer: {
            maxWidth: 345,
            opacity: 0.7,
            transition: "opacity .2s",
            "&:hover": {
                opacity: 1,
                cursor: "pointer",
            },
        },

        Title: {
            fontSize: 30,
        },

        Content: {
            zIndex: 1,
        },
    })
);

const TrendingItems: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const { loading, data } = useGetTrendingAnimesQuery({
        variables: { page: 1, perPage: 5, seasonYear: new Date().getFullYear() },
    });

    return (
        <Container className={classes.root} maxWidth="xl">
            <Grid container alignItems="center" justify="center" spacing={1}>
                <Grid item md={12}>
                    <Typography className={classes.Title} variant="button" align="center">
                        Trending Shows
                    </Typography>
                </Grid>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    data?.Page?.media?.map((res, i) => {
                        return (
                            <Grid item key={i}>
                                <Card
                                    onClick={() => history.push(`/anime/${res?.id}`)}
                                    raised={true}
                                    className={classes.CardContainer}
                                >
                                    <CardMedia
                                        component={"img"}
                                        height="250"
                                        image={res?.coverImage?.extraLarge!}
                                    />
                                    <CardContent className={classes.Content}>
                                        <Typography
                                            gutterBottom
                                            variant="button"
                                            component="h2"
                                        >
                                            {res?.title?.romaji}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            {res?.studios?.edges![0]?.node?.name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })
                )}
            </Grid>
        </Container>
    );
};

export default TrendingItems;
