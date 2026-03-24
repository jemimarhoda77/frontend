import React from "react";
import HeroSection from "./HeroSection";
import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import FeatureProducts from "./FeatureProducts";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy iPhone 14 Pro"
        subtitle="The most powerful iPhone ever."
        link="/product/69b3dd93953a4dcdb17b1279"
        image={iphone}
      />
      <FeatureProducts />
      <HeroSection
        title="Build the ultimate setup"
        subtitle="Experience the future of computing."
        link="/product/69b3dd93953a4dcdb17b1281"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
