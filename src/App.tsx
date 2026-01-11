import { createEffect, createSignal } from "solid-js";
import "./App.css";

function App() {
  const [y1, setY1] = createSignal(10);

  createEffect(() =>
    document.documentElement.style.setProperty("--y1", y1() + "%")
  );

  const [y2, setY2] = createSignal(20);

  createEffect(() =>
    document.documentElement.style.setProperty("--y2", y2() + "%")
  );

  const [slope, setSlope] = createSignal(0);

  createEffect(() =>
    document.documentElement.style.setProperty("--slope", slope() + "%")
  );

  return (
    <>
      <label for="y1">Y1</label>
      <input
        id="y1"
        type="range"
        max="100"
        value="20"
        onInput={(event) => setY1(+event.currentTarget.value)}
      />
      <label for="y2">Y2</label>
      <input
        id="y2"
        type="range"
        max="100"
        value="20"
        onInput={(event) => setY2(+event.currentTarget.value)}
      />
      <label for="slope">Slope</label>
      <input
        id="slope"
        type="range"
        max="100"
        value="0"
        onInput={(event) => setSlope(+event.currentTarget.value)}
      />
    </>
  );
}

export default App;
