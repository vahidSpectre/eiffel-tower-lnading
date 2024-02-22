import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import HttpApi from "i18next-http-backend";
import { useSelector } from "react-redux";

import Drawer from "./ui/layout/Drawer";
import "./App.css";
import SuspenseFallback from "./ui/components/SuspenseFallback";

function App() {
  const Landing = lazy(() => import("./ui/pages/Landing"));
  const Discover = lazy(() => import("../src/ui/pages/Discover"));
  const Events = lazy(() => import("../src/ui/pages/Events"));
  const News = lazy(() => import("../src/ui/pages/News"));
  const Photos = lazy(() => import("../src/ui/pages/Photos"));
  const NotFound = lazy(() => import("../src/ui/pages/NotFound"));

  const store = useSelector((state) => state.language);

  i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
      supportedLngs: ["de", "en", "es", "fa", "fr", "it", "ja", "pt"],
      // lng: store.language,
      fallbackLng: "en",
      backend: {
        loadPath:
          "https://vahidspectre.github.io/eiffel-tower-lnading/assets/locales/{{lng}}/translation.json",
      },
      detection: {
        order: ["path", "localStorage", "cookie", "htmlTag", "subdomain"],
        caches: ["localStorage"],
      },
      lookupFromPathIndex: 1,
      checkWhitelist: true,
    });

  return (
    <Routes className="App">
      <Route
        path={`/`}
        element={
          <Suspense fallback={<SuspenseFallback/>}>
            <Drawer>
              <Landing />
            </Drawer>
          </Suspense>
        }
      />
      <Route
        path={`/:lng/discover`}
        element={
          <Suspense fallback={<SuspenseFallback/>}>
            <Discover />
          </Suspense>
        }
      />
      <Route
        path={`/:lng/events`}
        element={
          <Suspense fallback={<SuspenseFallback/>}>
            <Events />
          </Suspense>
        }
      />
      <Route
        path={`/:lng/news`}
        element={
          <Suspense fallback={<SuspenseFallback/>}>
            <News />
          </Suspense>
        }
      />
      <Route
        path={`/:lng/photos`}
        element={
          <Suspense fallback={<SuspenseFallback/>}>
            <Photos />
          </Suspense>
        }
      />
      <Route
        path="/*"
        element={
          <Suspense fallback={<SuspenseFallback/>}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
