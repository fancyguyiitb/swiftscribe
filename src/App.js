import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import BlogState from "./context/blogs/BlogState";
import Footer from "./components/footer/Footer";
import ContentWrapper from "./components/contentWrapper/ContentWrapper";
import NewBlog from "./components/newBlog/NewBlog";
import WriteNewBlog from "./pages/writeNewBlog/WriteNewBlog";
import DetailsPage from "./pages/detailsPage/DetailsPage";
import Navbar from "./components/navbar/Navbar";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import LoginPage from "./pages/loginPage/LoginPage";
import SignUpPage from "./pages/singUpPage/SignUpPage"

function App() {
  return (
    //wrapping everything in BLogState to make states available to each and every state
    <BlogState>
      <ContentWrapper>
        <BrowserRouter>
          <Header />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              exact
              path="/writenewblog"
              element={<WriteNewBlog />}
            ></Route>
            <Route exact path="/blog/:id" element={<DetailsPage />}></Route>
            <Route exact path="/:category" element={<CategoryPage/>}></Route>
            <Route exact path="/login" element={<LoginPage/>}></Route>
            <Route exact path="/signup" element={<SignUpPage/>}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ContentWrapper>
    </BlogState>
  );
}

export default App;
