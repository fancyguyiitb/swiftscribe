import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ContentWrapper from "./components/contentWrapper/ContentWrapper";
import Layout from "./components/layout/Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <ContentWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage/>} />
            <Route path={"/login"} element={<LoginPage/>} />
            <Route path={"/register"} element={<RegisterPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContentWrapper>
  );
}

export default App;
