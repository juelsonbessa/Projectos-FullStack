import { useState } from "react";
import Header from "./components/header/header";
import FormLogin from "./components/form_login/form";

function App() {
  return (
    <>
      <Header></Header>

      <div className="flex flex-col mx-auto max-w-4xl h-lvh gap-10 mt-10">
        <div className="flex md:justify-between">
          <h5 className="text-blue-950  text-md md:text-2xl mr-10 md:mr-0">Login de agendamento.</h5>

          <div className="flex gap-2">
            <span className="text-sm text-slate-800 hidden md:flex">Selecionar linguagem</span>
            <select
              defaultValue="1"
              className="border border-slate-600 rounded-md pr-6"
            >
              <option value="1" disabled>Selecionar linguagem</option>
              <option value="2">Portugues</option>
              <option value="3">Ingles</option>
            </select>
          </div>
        </div>
        <p className="text-blue-950 text-md md:text-2xl w-full md:w-3/5 text-center md:text-left">
          Se é a primeira vez que que usa este serviço, por favor clique em novo
          usuário.
        </p>

        <FormLogin></FormLogin>
      </div>
    </>
  );
}

export default App;
