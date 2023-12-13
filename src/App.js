import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ContentWrapper from "./components/contentWrapper/ContentWrapper";

function App() {
  return (
    <ContentWrapper>
      <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </ContentWrapper>
  );
}

export default App;
