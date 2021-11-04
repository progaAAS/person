import React from "react";
import { useSelector } from "react-redux";
import s from "./PreviewPage.module.css";

const PreviewPage = () => {

  const { name, age, children } = useSelector(state => state.parent);

  return (

      <div className={s.container}>
        <h3>Персональные данные</h3>
        <div className={s.parent}>
          <div>{name}, </div>
          <div>{age} лет</div>
        </div>
        <h3>Дети</h3>
        <div className={s.childBox}>
          {children && children.map((user, index) => (
            <div className={s.childList} key={index}>
              <div className={s.container}>
                <div>{user.name},</div>
                <div>{user.age} лет</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    
  );
}
export default PreviewPage;

