import React, {useState} from "react";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";
import "./App.css";

//Funcion de flecha
const App = () => {
  const arrayTextoFuncionModificacionTexto = useState("");
  //arrayTextoFuncionModificacionTexto=> ["hola", funcion]
  const texto = arrayTextoFuncionModificacionTexto[0]
  const funcionModificaTexto = arrayTextoFuncionModificaTexto[1]
  //Lo que ejecuta la funcion
  return (
    <main className="react-calculator">
      <Result value={undefined} />
      <Numbers
        onClickNumbers={(number) => console.log("Click en number", number)}
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
