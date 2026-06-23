import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Creators from "./pages/Creators";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
