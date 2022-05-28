import React from "react";
import HeroSection from "../sections/HeroSection";
import StackSection from '../sections/StackSection';
import { home_page_text } from "../home_page_text";
import PoolShowcase from "../components/PoolShowcase";
import InterestDemo from "../components/InterestDemo";

// const getTokens = async (client) => {

function Home() {
  // HOME PAGE
  return (
    <div className="">
      <HeroSection {...home_page_text.hero_section1} />
    
      {/* <PoolShowcase apps = {home_page_text.apps}/> */}
    </div>
  );
}

export default Home;
