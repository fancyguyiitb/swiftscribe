import React, { useContext, useEffect } from "react";
// import ContentWrapper from "../components/contentWrapper/ContentWrapper";
import "./style.scss";
import HomeCards from "../components/homeCards/HomeCards";
import StockMarket from "../components/stockMarket/StockMarket";
import LatestTech from "../components/latestTech/LatestTech";
import Politics from "../components/politics/Politics";
import EduactionAndHealth from "../components/eduactionAndHealth/EduactionAndHealth";
import CallToAction from "../components/callToAction/CallToAction";
import MustRead from "../components/mustRead/MustRead";
import contextValue from "../context/blogs/BlogContext";
import NewBlog from "../components/newBlog/NewBlog";

const Home = () => {
  const context = useContext(contextValue);
  const { blogs, getAllBlogs } = context;
  useEffect(() => {
    getAllBlogs();
  }, []);
  // console.log(blogs);
  return (
    <>
    <h5 className="text-center">!! THIS PROJECT IS CURRENTLY UNDER DEVELOPMENT !!</h5>
      <NewBlog />
      <HomeCards />
      <hr />
      <StockMarket />
      <hr />
      <LatestTech />
      <hr />
      <Politics />
      <hr />
      <EduactionAndHealth />
      <CallToAction />
      <MustRead />
    </>
  );
};

export default Home;
