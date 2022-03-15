import { Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login";
import ModalProvider from "./Context/ModalProvider";
import Home from "./Pages/Home";

function App() {
  return (
    <ModalProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Login />} />
      </Routes>
    </ModalProvider>
  );
}

export default App;
