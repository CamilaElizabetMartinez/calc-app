import React, {useState} from "react";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";
import "./App.css";

//Funcion de flecha
const App = () => {
  //array destructuring
  const [stack, setStack] = useState("");

  //1er posicion: valor (que inicialmente es el valor por defecto)
  //2da posicion: funcion que me va a permitit modificar el valor por defecto

  //Lo que ejecuta la funcion
  console.log("Renderizacion de App")
  return (
    <main className="react-calculator">
      <Result value={stack} />
      <Numbers
        onClickNumber={number => {console.log("Click en number", number)
        setStack (number)
      }}
      />

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
