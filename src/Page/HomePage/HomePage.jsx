import {nanoid} from "nanoid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Childrens from "../../components/Childrens/Childrens";
import MyButton from "../../components/UI/button/MyButton";
import TextInput from "../../components/UI/TextInput/TextInput";
import { setChildren, setParent } from "../../redux/parentReducer";
import s from "./HomePage.module.css";

const Children = () => {

  const [inputList, setInputList] = useState([]);
 
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const addchildren = () =>{
    setInputList([...inputList, { id: nanoid(10), name: "", age: "" }]);
  }

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const dispatch = useDispatch();

  const AddParent = () =>{
    dispatch(setParent(name, age))
    dispatch(setChildren(inputList))
  }
  const removeInputChildren = (child, e) => {
    e.preventDefault();
    setInputList(inputList.filter(p => p.id !== child))
  }

  return (
    <div className={s.container}>
      <div className={s.parents}>
        <h3>Персональные данные</h3>
        <form className={s.form}>
          <TextInput value={name} onChange={(e)=>setName(e.target.value)} label="Имя"/>
          <TextInput value={age} onChange={(e)=>setAge(e.target.value)} label="Возраст"/>
        </form>
      </div>
      <Childrens removeChildren={removeInputChildren} inputList={inputList} handleInputChange={handleInputChange} addchildren={addchildren} />
      <MyButton onClick={AddParent} className={s.save}>Сохранить</MyButton>
    </div>
  );
}
export default Children;

