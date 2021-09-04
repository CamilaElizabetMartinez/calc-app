import React from "react";
import Result from "./components/Result";
import Button from "./components/Button";
import MathOperations from "./components/MathOperations";
import Functions from "./components/Functions";
import "./App.css";

//Funcion de flecha
const App = () => {
  const clickHandlerFunction = (text) => {};

  //Lo que ejecuta la funcion
  return (
    <main className="react-calculator">
      <Result value={undefined} />
      <div className="numbers">
        <Button text="1" clickHandler={(clickHandlerFunction) => {}} />
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
      </div>

      <Functions
        onContenClear={() => console.log("Content clear")}
        onDelete={() => console.log("onDelete")}
      />

      <MathOperations
        onClickOperation={(operation) => console.log("Operation:", operation)}
        onClickEqual={(equal) => console.log("Equal:", equal)}
      />
    </main>
  );
};

export default App;
