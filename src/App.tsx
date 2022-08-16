import { useState } from "react";

import Game from "./components/Game";

function App() {
  if (!localStorage.getItem("size")) localStorage.setItem("size", "12");
  const Size = parseInt(localStorage.getItem("size") ?? "12");

  const [size] = useState<number>(Math.min(12, Math.max(2, Size)));

  return (
    <>
      <Game size={size} />
    </>
  );
};

export default App;