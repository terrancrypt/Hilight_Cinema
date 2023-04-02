import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

export default function MainLayout({ Component }) {
  return (
    <div className="min-h-screen h-full flex flex-col">
      <Header />

      <div className="flex-grow my-10">
        <Component />
      </div>

      <Footer />
    </div>
  );
}
