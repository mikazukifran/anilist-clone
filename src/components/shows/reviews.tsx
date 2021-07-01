import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { GetAnimeFromIdQuery } from "../../generated/graphql";

interface Props {
    data: GetAnimeFromIdQuery | undefined;
}

const Reviews: React.FC<Props> = ({ data }) => {
    return (
        <Container maxWidth="xl">
            <Grid>H</Grid>
        </Container>
    );
};

export default Reviews;
