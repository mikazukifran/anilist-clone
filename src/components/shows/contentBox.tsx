import React from "react";
import { GetAnimeFromIdQuery } from "../../generated/graphql";
import {
    Container,
    Grid,
    Typography,
    Paper,
    AppBar,
    Toolbar,
    makeStyles,
    createStyles,
    Theme,
    GridList,
    GridListTile,
    GridListTileBar,
    Grow,
    Fade,
} from "@material-ui/core";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { useHistory } from "react-router-dom";

interface Props {
    data: GetAnimeFromIdQuery | undefined;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginTop: 25,
        },

        paper: {
            padding: 10,
            borderRadius: 0,
        },

        appbar: {
            flexGrow: 1,
            backgroundColor: "#1f1f1f",
        },

        gridlist: {
            height: 300,
        },

        tileImage: {
            opacity: 0.7,
            width: 150,

            "&:hover": {
                transition: "opacity .2s",
                opacity: 1,
                cursor: "pointer",
            },
        },
    })
);

function SwitchTextToHtml(textData: string) {
    return { __html: textData };
}

const ContentBox: React.FC<Props> = ({ data }) => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <Container className={classes.root} maxWidth="xl">
            <Grid container alignItems="flex-start" justify="flex-start" spacing={1}>
                <Grid item md={3}>
                    <GridList className={classes.gridlist} cellHeight={150} cols={3}>
                        {data?.Media?.characters?.edges?.map((res, i) => {
                            return (
                                <GridListTile
                                    onClick={() =>
                                        history.push(`/character/${res?.node?.id!}`)
                                    }
                                    cols={1}
                                    key={i}
                                >
                                    <LazyLoadImage
                                        className={classes.tileImage}
                                        src={res?.node?.image?.large!}
                                        alt=""
                                        effect="opacity"
                                    />

                                    <GridListTileBar
                                        title={res?.node?.name?.full!}
                                        subtitle={res?.role}
                                    />
                                </GridListTile>
                            );
                        })}
                    </GridList>
                </Grid>
                <Grid item md={9}>
                    <AppBar className={classes.appbar} position="static">
                        <Toolbar>
                            <Typography variant="button">Description</Typography>
                        </Toolbar>
                    </AppBar>
                    <Paper
                        elevation={2}
                        className={classes.paper}
                        dangerouslySetInnerHTML={SwitchTextToHtml(
                            data?.Media?.description!
                        )}
                    ></Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ContentBox;
