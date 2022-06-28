import ReactDOM from "react-dom/client"; //Here we are importing ReactDOM object from the react-dom 3rd party library, which is one of the dependencies that is downloaded and installed locally

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); //Here CreateRoot, creates the main entry point, the main hook of the overall user interface you are about to build with React and store it in a variable called 'root'

root.render(<App />);
