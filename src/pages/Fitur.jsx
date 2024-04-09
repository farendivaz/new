import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Fitur() {
  const [feature, setFeature] = useState("");
  const renderComponent = () => {
    switch (feature) {
      case "fitur1":
        return (
          <h1 className="text-8xl mx-auto text-center font-bold">FITUR 1</h1>
        );
      case "fitur2":
        return (
          <h1 className="text-8xl mx-auto text-center font-bold">FITUR 2</h1>
        );
      case "fitur3":
        return (
          <h1 className="text-8xl mx-auto text-center font-bold">FITUR 3</h1>
        );
      case "fitur4":
        return (
          <h1 className="text-8xl mx-auto text-center font-bold">FITUR 4</h1>
        );
      case "fitur5":
        return (
          <h1 className="text-8xl mx-auto text-center font-bold">FITUR 5</h1>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <NavBar />
      <div className="m-24">
        <ul className="divide-y-4 text-xl">
          <li
            className="cursor-pointer m-8"
            onClick={() => setFeature("fitur1")}
          >
            Fitur 1
          </li>
          <li
            className="cursor-pointer m-8"
            onClick={() => setFeature("fitur2")}
          >
            Fitur 2
          </li>
          <li
            className="cursor-pointer m-8"
            onClick={() => setFeature("fitur3")}
          >
            Fitur 3
          </li>
          <li
            className="cursor-pointer m-8"
            onClick={() => setFeature("fitur4")}
          >
            Fitur 4
          </li>
          <li
            className="cursor-pointer m-8"
            onClick={() => setFeature("fitur5")}
          >
            Fitur 5
          </li>
        </ul>
        {renderComponent()} 
      </div>
      <Footer />
    </>
  );
}
