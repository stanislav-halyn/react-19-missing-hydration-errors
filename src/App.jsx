import { useState, useEffect, lazy, Suspense } from "react";

const LazyComponent = lazy(() => {
  return import("./Component").then(({ Component }) => ({
    default: Component,
  }));
});

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(1);
  }, []);

  return (
    <>
      <div>hello there from root: {count}</div>

      <Suspense fallback={<div>loading...</div>}>
        <LazyComponent />
      </Suspense>
    </>
  );
}

export default App;
