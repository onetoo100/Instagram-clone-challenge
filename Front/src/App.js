import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlertState from "./contexts/alertState";
import PublicacionState from "./contexts/publicationState";
import Home from "./pages/Home";

function App() {
  return (
    <AlertState>
      <PublicacionState>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </PublicacionState>
    </AlertState>
  );
}

export default App;
