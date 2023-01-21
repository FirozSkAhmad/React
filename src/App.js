import React from 'react';
import './style.css';
import style from './Style.module.css'

export default function App() {
  return (
    <div className="App">
      <h1 className="style1">Hello style type 1</h1>
      <h1 style={{backgroundColor:"black",color:"red"}}>Hello style type 2</h1>
      <h1 className={style.magic}>Hello style type 3</h1>
    </div>
  );
}
