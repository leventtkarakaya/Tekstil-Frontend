import React from "react";
import Content from "../Components/Content";
import QuoteForm from "../Components/QuoteForm";
import About from "../Components/About";
import Gallery from "../Components/Gallery";
import AboutContent from "../Components/ContentAbout";

export default function Home() {
  return (
    <>
      <Content />
      <QuoteForm />
      <About />
      <Gallery />
      <AboutContent />
    </>
  );
}
