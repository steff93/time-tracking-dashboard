import classNames from "classnames";
import { useContext, useState } from "react";
import "./Menu.scss";
import { sectionBaseClass } from "./config";
import { Context } from "./context";

const Menu = (props) => {
  const [activeTimeFrame, setActiveTimeFrame] = useState("weekly");
  const { updateType } = useContext(Context);
  const subTitle = "Report for";
  const subjectName = "Jeremy Robson";
  const timeFrames = ["daily", "weekly", "monthly"];

  return (
    <div className={`${sectionBaseClass}__menu`}>
      <div className={`${sectionBaseClass}__profile`}>
        <img
          className={`${sectionBaseClass}__profile--image`}
          src="/time-tracker/images/image-jeremy.png"
          alt="profile-pic"
        />

        <span className={`${sectionBaseClass}__profile--subtitle`}>
          {subTitle}
        </span>

        <h3 className={`${sectionBaseClass}__profile--title`}>{subjectName}</h3>
      </div>

      <div className={`${sectionBaseClass}__timeframe-switcher`}>
        {timeFrames.map((timeFrame) => {
          return (
            <span
              className={classNames(
                `${sectionBaseClass}__timeframe-switcher--item`,
                { active: activeTimeFrame === timeFrame }
              )}
              key={timeFrame}
              onClick={() => {
                setActiveTimeFrame(timeFrame);
                updateType(timeFrame);
              }}
            >
              {timeFrame}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
