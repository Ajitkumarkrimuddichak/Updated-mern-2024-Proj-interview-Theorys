import seriseData from "../api/seriseData.json";
import { SeriesCard } from "./SeriesCard";

const Cards = () => {
  return (
    <ul>
      {seriseData.map((passProps) => {
        return <SeriesCard key={passProps.id} data={passProps} />;
      })}
    </ul>
  );
};

export default Cards;
