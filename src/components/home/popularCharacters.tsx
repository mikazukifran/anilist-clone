import {
    Container,
    Grid,
    Typography,
    Card,
    CardMedia,
    CardContent,
    makeStyles,
    createStyles,
    Theme,
    Button,
} from "@material-ui/core";
import { useGetPopularCharactersQuery } from "../../generated/graphql";
import ReactMarkdown from "react-markdown";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            maxWidth: 345,
            opacity: 0.7,
            transition: "opacity .2s",
            "&:hover": {
                opacity: 1,
                cursor: "pointer",
            },
        },

        container: {
            marginTop: 50,
        },

        title: {
            fontSize: 30,
        },
    })
);

const PopularCharacters = () => {
    const classes = useStyles();
    const { loading, data } = useGetPopularCharactersQuery({
        variables: {
            page: 1,
            perPage: 5,
        },
    });

    return (
        <Container className={classes.container} maxWidth="xl">
            <Grid container alignItems="center" justify="center" spacing={1}>
                <Grid item md={12}>
                    <Typography className={classes.title} variant="button" component="h1">
                        Most liked characters
                    </Typography>
                </Grid>
                {loading ? (
                    <Grid item>Loading titles...</Grid>
                ) : (
                    data?.Page?.characters?.map((character, i) => {
                        let description = character?.description;
                        description = description?.slice(0, 180);
                        description = description + "...";
                        return (
                            <Grid item key={i}>
                                <Grid item className={classes.card} component={Card}>
                                    <CardMedia
                                        component={"img"}
                                        image={character?.image?.large!}
                                        height="180"
                                    />
                                    <CardContent>
                                        <Typography variant="button" component="h2">
                                            {character?.name?.full}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            component="span"
                                            color="textSecondary"
                                        >
                                            <ReactMarkdown>{description!}</ReactMarkdown>
                                        </Typography>
                                        <Button variant="contained">Keep reading</Button>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        );
                    })
                )}
            </Grid>
        </Container>
    );
};

export default PopularCharacters;
