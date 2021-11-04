import React from "react";
import MyButton from "../UI/button/MyButton";
import TextInput from "../UI/TextInput/TextInput";
import s from "./Childrens.module.css";

const Childrens = ({inputList, handleInputChange, addchildren, removeChildren}) => {

  return (
  <div className={s.children}>
    <div className={s.header}>
      <h3>Дети (макс. 5)</h3>
      <MyButton disabled={inputList.length <= 4 ? "" : true} className={s.addChildren} onClick={addchildren}>Добавить ребенка</MyButton>
    </div>
    <form className={s.box}>
      {inputList.map((x, i) => {
        return (
          <div className={s.boxItem} key={i}>
            <TextInput name="name" value={x.name} onChange={(e) => handleInputChange(e, i)} label="Имя"/>
            <TextInput name="age" value={x.age}  onChange={(e) => handleInputChange(e, i)} label="Возраст"/>
            <div className={s.btn_box}>
              <MyButton className={s.remove} onClick={(e) => removeChildren(x.id, e)}>Удалить</MyButton>
            </div>
          </div>
      )})}
    </form>
  </div>
  );
}
export default Childrens;

