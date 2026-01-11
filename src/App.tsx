import { createEffect, createSignal } from "solid-js";
import "./App.css";

function App() {
  const [depth, setDepth] = createSignal(20);

  createEffect(() =>
    document.documentElement.style.setProperty("--depth", depth() + "%")
  );

  return (
    <>
      <label for="depth">Depth</label>
      <input
        id="depth"
        type="range"
        max="100"
        value="20"
        onInput={(event) => setDepth(+event.currentTarget.value)}
      />
    </>
  );
}

export default App;
