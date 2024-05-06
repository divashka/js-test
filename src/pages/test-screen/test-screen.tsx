import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useEffect, useState } from "react";
import {
  fetchQuestionsAction,
  fetchOneQuestionAction,
} from "../../store/api-actions/api-actions";
import baseStyles from "../../index.module.scss";
import { getOneQuestion } from "../../store/test-slice/selectors";
import styles from "./test-screen.module.scss";
import CodeBlock from "../../components/code-highlight/code-highlight";
import BaseScreen from "../base-screen/base-screen";
import { AppRoute } from "../../const/const";
import Button from "../../components/button/button";

function TestScreen(): JSX.Element | null {
  const { id } = useParams();

  const [activeIndexItem, setActiveIndexItem] = useState<null | number>(null);

  const question = useAppSelector(getOneQuestion);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!id) {
      return;
    }

    dispatch(fetchOneQuestionAction(Number(id)));
    dispatch(fetchQuestionsAction());

    return () => {setActiveIndexItem(null)};
  }, [dispatch, id]);

  if (!question) {
    return null;
  }

  const { question: title, code, answers } = question;

  const currentItemId = String(Number(id) + 1);

  function handleAnswerClick(index: number) {
    console.log(index);
    setActiveIndexItem(index);
  }

  return (
    <BaseScreen count={id ?? ""}>
      <div className={`${baseStyles.body} ${styles.bodyColumns}`}>
        <div className={styles.quest}>
          {id}. {title}
        </div>
        <div className={styles.columns}>
          <div className={`${styles.column}`}>
            <CodeBlock codestring={code}></CodeBlock>
          </div>
          <div className={`${styles.column}`}>
            <div className={styles.list}>
              {answers.map((title, index) => (
                <li
                  key={title}
                  className={`
                  ${styles.item}
                  ${activeIndexItem === index && styles.itemActive}
                  `}
                  onClick={() => handleAnswerClick(index)}
                >
                  {title}
                </li>
              ))}
            </div>
          </div>
        </div>
        <Button nameClass={styles.link}>
          <Link
            to={`${AppRoute.Test}/${currentItemId}`}
            className={baseStyles.button}
          >
            Next
          </Link>
        </Button>
      </div>
    </BaseScreen>
  );
}

export default TestScreen;
