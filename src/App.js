import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import "./App.css";
const Landing = lazy(() => import("./ui/pages/Landing"));
const Discover = lazy(() => import("../src/ui/pages/Discover"));
const Events = lazy(() => import("../src/ui/pages/Events"));
const News = lazy(() => import("../src/ui/pages/News"));
const Photos = lazy(() => import("../src/ui/pages/Photos"));
const NotFound = lazy(() => import("../src/ui/pages/NotFound"));

function App() {
  return (
    <Routes className="App">
      <Route
        path="/"
        element={
          <Suspense fallback={<>Loading ...</>}>
            <Landing />
          </Suspense>
        }
      />
      <Route
        path="/discover"
        element={
          <Suspense fallback={<>Loading ...</>}>
            <Discover />
          </Suspense>
        }
      />
      <Route
        path="/events"
        element={
          <Suspense fallback={<>Loading ...</>}>
            <Events />
          </Suspense>
        }
      />
      <Route
        path="/news"
        element={
          <Suspense fallback={<>Loading ...</>}>
            <News />
          </Suspense>
        }
      />
      <Route
        path="/photos"
        element={
          <Suspense fallback={<>Loading ...</>}>
            <Photos />
          </Suspense>
        }
      />
      <Route
        path="/*"
        element={
          <Suspense fallback={<>Loading ...</>}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
