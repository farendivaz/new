import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import KumpulanCerita from "../components/news/KumpulanCerita";
import Features from "../components/news/Features";

const News = () => {
  return (
    <>
      <NavBar />
      <KumpulanCerita />
      <Features />
      <Footer />
    </>
  );
};

export default News;
