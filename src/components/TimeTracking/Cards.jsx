import data from "../../data/time-tracking-data.json";
import Card from "./Card";
import "./Cards.scss";
import { sectionBaseClass } from "./config";

import { ReactComponent as IconElipsis } from "../../assets/icons/icon-ellipsis.svg";

const Cards = () => {
  return (
    <div className={`${sectionBaseClass}__cards`}>
      {data.map((data) => {
        return (
          <Card
            key={data.title}
            title={data.title}
            data={data.timeframes}
            icon={IconElipsis}
          />
        );
      })}
    </div>
  );
};

export default Cards;
