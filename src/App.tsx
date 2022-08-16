import { useState } from "react";

import Game from "./components/Game";

function App() {
  if (!localStorage.getItem("size")) localStorage.setItem("size", "12");
  const Size = parseInt(localStorage.getItem("size") ?? "12");

  const [size] = useState<number>(Math.min(12, Math.max(2, Size)));

  return (
    <>
      <div className="mobile">
        <div className="sorry">죄송합니다.</div>
        모바일에서는 플레이 할 수 없어요.
      </div>
      <Game size={size} />
    </>
  );
};

export default App;