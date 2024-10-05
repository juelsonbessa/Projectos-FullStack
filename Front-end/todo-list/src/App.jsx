import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ListTask from "./pages/listTasks/listTasks";
import ListImportant from "./pages/listImportant/listImportant";
import ListDone from "./pages/listDone/listDone";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/list-important" element={< ListImportant />}/>
        <Route path="/list-done" element={< ListDone />}/>
        <Route path="/" element={< ListTask />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
