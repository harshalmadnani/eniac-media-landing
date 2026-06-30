import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Creators from "./pages/Creators";
import WhyUs from "./pages/WhyUs";
import SmoothScroll from "./components/SmoothScroll";
import DecksModal from "./components/DecksModal";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <SmoothScroll />
      <ScrollToTop />
      <DecksModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
