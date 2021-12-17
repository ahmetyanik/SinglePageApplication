import { useState } from 'react';

// props = {text: String, onButton: Function}
const TodoInput = (props) => {
    const [name, setName] = useState('Wasche wäschen');

    const sendMother = () => {
      props.onButton(name);
    };

/*     function veriGonder(){

      const value = document.querySelector("input").value;
      setName(value)
    } */
 
/*     const changeHandler = (event) => {
      console.log(event.target.value);
      setName(event.target.value);
    };
  */
    return (
    <div style={{backgroundColor:"blue"}}>
     {  <input
       // value={name}
       type="text"
       placeholder="Name der Aufgaben"
       // onChange={changeHandler}
       // onChange={veriGonder}
       />
 }
      <button onClick={sendMother}>{props.text}</button>
      <p>"{name}" Hinzufügen?</p>
    </div>
    );
  };
  
  export default TodoInput;