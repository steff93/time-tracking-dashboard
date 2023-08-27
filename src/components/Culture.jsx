import "./Culture.scss";

const Culture = () => {
  const CSSSectionClass = "culture";
  return (
    <section id="culture" className={CSSSectionClass}>
      <div className="culture-wrapper">
        <div className="culture__media">
          <div className="culture__media-main">
            <img src="/images/culture/main.jpg" alt="" class="culture__image" />
          </div>
          <img
            src="/images/culture/top.jpg"
            alt=""
            className="culture__image culture__image--top"
          />
          <img
            src="/images/culture/side.jpg"
            alt=""
            className="culture__image culture__image--side"
          />
        </div>

        <div className="culture__content culture-content">
          <header className="culture__header culture-header">
            <span className="culture-header__subtitle">
              People Making a difference
            </span>
            <h1 className="culture-header__title">Company Culture</h1>
          </header>
          <p className="culture-content__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div
          className="culture__decoration culture-decoration"
          aria-hidden="true"
        >
          <div className="culture-decoration__label">
            <span className="culture-decoration__label-inner">Company</span>
          </div>
          <div className="culture-decoration__label">
            <span className="culture-decoration__label-inner">Culture</span>
          </div>
          <span className="culture-decoration__number">002</span>
        </div>
      </div>
    </section>
  );
};

export default Culture;
