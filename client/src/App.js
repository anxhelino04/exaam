import "./App.css";
import Form from "./components/Form";
import PetList from "./components/PetList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PetDetail from "./components/PetDetails";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/" element={<PetList />} />
          <Route path="/list/:id" element={<PetDetail />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
