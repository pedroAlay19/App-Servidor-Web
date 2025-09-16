import React from "react";
import { Routes, Route } from "react-router-dom";
import { HeaderComponent } from "./components/HeaderComponent";
import { FooterComponent } from "./components/FooterComponent";

// Pages
import {LandingPage} from "./pages/LandingPage";
import {ProductPage} from "./pages/ProductPage";
import {AboutUs} from "./pages/AboutUs";
import {Contact} from "./pages/Contact";

export const App: React.FC = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <HeaderComponent />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <FooterComponent />
      </div>
    </>
  );
};