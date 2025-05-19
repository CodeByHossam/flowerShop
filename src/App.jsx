import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="app" className="bg-main-color max-w-[maxAppWidth] border-2">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
