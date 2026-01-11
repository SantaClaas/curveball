import { createEffect, createSignal, untrack } from "solid-js";
import "./App.css";

function App() {
  const styles = getComputedStyle(document.documentElement);
  const getPropertyPercentage = (property: string) =>
    +styles.getPropertyValue(property).replace("%", "");

  const [y1, setY1] = createSignal(getPropertyPercentage("--y1"));

  createEffect(() =>
    document.documentElement.style.setProperty("--y1", y1() + "%")
  );

  const [y2, setY2] = createSignal(getPropertyPercentage("--y2"));

  createEffect(() =>
    document.documentElement.style.setProperty("--y2", y2() + "%")
  );

  const [controlXOffset, setControlXOffset] = createSignal(
    getPropertyPercentage("--control-x-offset")
  );

  createEffect(() =>
    document.documentElement.style.setProperty(
      "--control-x-offset",
      controlXOffset() + "%"
    )
  );

  const [controlYOffset, setControlYOffset] = createSignal(
    getPropertyPercentage("--control-y-offset")
  );

  createEffect(() =>
    document.documentElement.style.setProperty(
      "--control-y-offset",
      controlYOffset() + "%"
    )
  );

  return (
    <>
      <label for="y1">Y1</label>
      <input
        id="y1"
        type="range"
        max="100"
        value={untrack(y1)}
        onInput={(event) => setY1(+event.currentTarget.value)}
      />
      <label for="y2">Y2</label>
      <input
        id="y2"
        type="range"
        max="100"
        value={untrack(y2)}
        onInput={(event) => setY2(+event.currentTarget.value)}
      />
      <label for="control-x-offset">Control X1/X2 Offset</label>
      <input
        id="control-x-offset"
        type="range"
        max="100"
        value={untrack(controlXOffset)}
        onInput={(event) => setControlXOffset(+event.currentTarget.value)}
      />
      <label for="control-y-offset">Control Y1/Y2 Offset</label>
      <input
        id="control-y-offset"
        type="range"
        max="100"
        value={untrack(controlYOffset)}
        onInput={(event) => setControlYOffset(+event.currentTarget.value)}
      />
    </>
  );
}

export default App;
