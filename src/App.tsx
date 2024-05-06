import { HelmetProvider } from "react-helmet-async";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import StartScreen from "./pages/start-screen/start-screen";
import TestScreen from "./pages/test-screen/test-screen";
import { AppRoute } from "./const/const";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={<StartScreen />}
          />
          <Route
            path={`${AppRoute.Test}/:id`}
            element={<TestScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App;
