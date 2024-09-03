import { useState } from "react";
import { HeroSection } from "./sections/hero";
import { Navigation } from "./sections/navigation";

function App() {
  const [showSection, setShowSection] = useState(false);

  const handleShow = () => {
    setShowSection(true);
  };

  return (
    <>
      <HeroSection showSlider={showSection} handleShow={handleShow} />
      {showSection && <Navigation />}
    </>
  );
}

export default App;
