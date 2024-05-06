import baseStyles from "../../index.module.scss";
import styles from "./start-screen.module.scss";
import { Helmet } from "react-helmet-async";
import { AppRoute } from "../../const/const";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";

function StartScreen(): JSX.Element {
  return (
    <div className={baseStyles.wrapper}>
      <Helmet>
        <title>JS Test | Start</title>
      </Helmet>
      <div className={baseStyles.inner}>
        <div className={`${baseStyles.body} ${baseStyles.bodyCenter}`}>
          <span className={styles.greet}>Hello everyone</span>
          <span className={styles.subtitle}>from Basic to Advanced</span>
          <p className={styles.text}>
            Test how well you know JavaScript, refresh your knowledge a bit, or
            prepare for your coding interview!
          </p>
          <Button>
            <Link
              to={`${AppRoute.Test}/1`}
              className={`${styles.button} ${baseStyles.button}`}
            >
              Run test
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
