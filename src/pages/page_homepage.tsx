import TrendingItems from "../components/home/trendingShows";
import SplashScreen from "../components/home/splash";
import PopularCharacters from "../components/home/popularCharacters";

const Homepage = () => {
    return (
        <div>
            <SplashScreen />
            <TrendingItems />
            <PopularCharacters />
        </div>
    );
};

export default Homepage;
