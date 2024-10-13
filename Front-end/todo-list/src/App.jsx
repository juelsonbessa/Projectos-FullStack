import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ListTask from "./pages/listTasks/listTasks";
import ListImportant from "./pages/listImportant/listImportant";
import ListDone from "./pages/listDone/listDone";
import Search from "./pages/search/serach";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search/:id" element={< Search />}/>
        <Route path="/list-important" element={< ListImportant />}/>
        <Route path="/list-done" element={< ListDone />}/>
        <Route path="/" element={< ListTask />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
