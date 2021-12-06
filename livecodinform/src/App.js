import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

  const [name,setName] = useState({
    isim:"",
    soyisim : ""
  });

/* 

  const inputChange = (e)  =>{

    const val = e.target.name;
    setName([val]);

  }

   */

   const ekle = (e) =>{

      const gelenVeri = e.target.value;

      console.log(gelenVeri);

      setName((previousDatas)=>{

        return{
          ...previousDatas,
          [e.target.name]:gelenVeri
        }

      })
   }

  return (
    <div className="App">
      
      <h1>Hallo {name.isim} {name.soyisim} </h1>

      <input name = "isim"  onChange={ekle} type="text"/>
      <input name = "soyisim"  onChange={ekle} type="text"/>

    </div>
  );
}

export default App;
