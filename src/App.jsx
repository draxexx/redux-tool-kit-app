import "./App.css";
import Counter from "./features/counter/Counter";
import Counter2 from "./features/counter-2/Counter2";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />}></Route>
        <Route path="/counter2" element={<Counter2 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
