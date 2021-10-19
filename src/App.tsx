import { Tree } from "./components";
import mockData from "./mockData.json";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Tree Component</h1>
      <Tree data={mockData} />
    </div>
  );
}
