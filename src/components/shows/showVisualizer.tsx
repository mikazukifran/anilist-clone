import React from "react";
import { useParams } from "react-router-dom";
import {
    MediaType,
    useGetAnimeFromIdQuery,
    MediaFormat,
    MediaStatus,
    MediaSeason,
    MediaSource,
} from "../../generated/graphql";

import TitleBar from "./titleBar";
import ContentBox from "./contentBox";
import Reviews from "./reviews";

interface Params {
    id: string;
}

function FirstLetterUppercase(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const Visualizer: React.FC = () => {
    const { id } = useParams<Params>();

    const { loading, data } = useGetAnimeFromIdQuery({
        variables: { id: parseInt(id, 10) },
    });

    if (loading) return <div></div>;

    let animeData: typeof data = JSON.parse(JSON.stringify(data));

    animeData!.Media!.type! = FirstLetterUppercase(animeData!.Media!.type!) as MediaType;
    animeData!.Media!.format! = FirstLetterUppercase(
        animeData!.Media!.format!
    ) as MediaFormat;
    animeData!.Media!.status! = FirstLetterUppercase(
        animeData!.Media!.status!
    ) as MediaStatus;
    animeData!.Media!.season! = FirstLetterUppercase(
        animeData!.Media!.season!
    ) as MediaSeason;
    animeData!.Media!.source! = FirstLetterUppercase(
        animeData!.Media!.source!
    ) as MediaSource;

    return (
        <React.Fragment>
            <TitleBar data={animeData} />
            <ContentBox data={animeData} />
            <Reviews data={animeData} />
        </React.Fragment>
    );
};

export default Visualizer;
