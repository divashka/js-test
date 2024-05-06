import { ReactNode } from 'react'
import { Helmet } from "react-helmet-async";
import { useAppDispatch } from "../../hooks/hooks";
import { useEffect } from "react";
import { fetchQuestionsAction } from "../../store/api-actions/api-actions";
import baseStyles from "../../index.module.scss";

type BaseScreenProps = {
 children: ReactNode;
 count: string;
}

function BaseScreen({count, children}: BaseScreenProps): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuestionsAction());
  }, [dispatch]);

  return (
    <div className={baseStyles.wrapper}>
      <Helmet>
        <title>JS Test | Test {count} / 155</title>
      </Helmet>
      <div className={baseStyles.inner}>
       {children}
      </div>
    </div>
  );
}

export default BaseScreen;
