import ModalProvider from "./Context/ModalProvider";
import Home from "./Pages/Home";

function App() {
  return (
    <ModalProvider>
      <Home />
    </ModalProvider>
  );
}

export default App;
