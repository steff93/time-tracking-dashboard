import { useContext } from "react";
import {
  IconElipsis,
  IconExercise,
  IconPlay,
  IconSelfCare,
  IconSocial,
  IconStudy,
  IconWork,
} from "../../assets/icons/index";
import "./Card.scss";
import { sectionBaseClass } from "./config";
import { Context } from "./context";

const Card = ({ title, data }) => {
  const { timeFrameType } = useContext(Context);
  const getCardIcon = () => {
    switch (title) {
      case "Work":
        return <IconWork />;
      case "Play":
        return <IconPlay />;
      case "Study":
        return <IconStudy />;
      case "Exercise":
        return <IconExercise />;
      case "Social":
        return <IconSocial />;
      case "Self Care":
        return <IconSelfCare />;

      default:
        return null;
    }
  };

  const previousLabel =
    timeFrameType === "daily"
      ? "Day"
      : timeFrameType === "weekly"
      ? "Week"
      : "Month";

  return (
    <div
      className={`${sectionBaseClass}__card ${sectionBaseClass}__card--${title
        .toLowerCase()
        .replace(/\s/g, "")}`}
    >
      <div className={`${sectionBaseClass}__card--icon`}>
        <i>{getCardIcon()}</i>
      </div>

      <div className={`${sectionBaseClass}__card--info`}>
        <div className={`${sectionBaseClass}__card--header`}>
          <span className={`${sectionBaseClass}__card--header-title`}>
            {title}
          </span>
          <IconElipsis />
        </div>

        <span className={`${sectionBaseClass}__card--current`}>
          {data[timeFrameType].current}hrs
        </span>
        <span className={`${sectionBaseClass}__card--previous`}>
          Last {previousLabel} - {data[timeFrameType].previous} hrs
        </span>
      </div>
    </div>
  );
};

export default Card;
