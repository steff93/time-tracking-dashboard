import Menu from "./Menu";
import "./TimeTracking.scss";
import { sectionBaseClass } from "./config";

import Card from "./Cards";
import { Provider } from "./context";
const TimeTracking = () => {
  return (
    <section className={sectionBaseClass}>
      <div className={`${sectionBaseClass}__wrapper`}>
        <Provider>
          <Menu />
          <Card />
        </Provider>
      </div>
    </section>
  );
};

export default TimeTracking;
