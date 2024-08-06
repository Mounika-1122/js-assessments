//Create a React component that uses React Suspense for lazy loading.
import { Suspense, lazy } from "react";
const HeavyComponent = lazy(() => import("./HeavyComponent"));

export const LazyLoadingComponent = () => {
  return (
    <div>
      <h1>React Suspense Example</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
};