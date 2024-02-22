import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import HttpApi from "i18next-http-backend";
import { useSelector } from "react-redux";

import Drawer from "./ui/layout/Drawer";
import "./App.css";

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
          <Suspense fallback={<>Loading ...</>}>
            <Drawer>
              <Landing />
            </Drawer>
          </Suspense>
        }
      />
      <Route
        path={`/discover`}
        element={
          <Suspense fallback={<>Loading ...</>}>
            <Discover />
          </Suspense>
        }
      />
      <Route
        path={`/events`}
        element={
          <Suspense fallback={<>Loading ...</>}>
            <Events />
          </Suspense>
        }
      />
      <Route
        path={`/news`}
        element={
          <Suspense fallback={<>Loading ...</>}>
            <News />
          </Suspense>
        }
      />
      <Route
        path={`/photos`}
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
