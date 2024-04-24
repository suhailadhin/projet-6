import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Story from "./Story";
import Project from "./Project";
import Footer from "./composant/layout/Footer";


const App = () => {
  return(
     <div>
      <Header /> {/* Incluez le composant Header ici */}
      <main>
      <Story />
      <Banner />
      <Project />
      </main>
      <Footer />
     </div>
  );
};

export default App;


