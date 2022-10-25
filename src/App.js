import "./styles.css";
import { logo } from "./assets";

import { Contacts } from "./views";
export default function App() {
  return (
    <div className="App">
      <div>
        <img src={logo} alt="MiView" width={200} />
      </div>
      <Contacts />
    </div>
  );
}
