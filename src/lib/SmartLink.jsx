import { Link, useLocation, useNavigate } from "react-router-dom";

// Anchor that smooth-scrolls to a section id ("#contact"), or routes to a page ("/work").
// Works with HashRouter without the in-page anchors fighting the router.
export function SmartLink({ to, className = "", children, onClick }) {
  const location = useLocation();
  const navigate = useNavigate();

  if (to.startsWith("#")) {
    const id = to === "#top" ? null : to.slice(1);
    const handle = (e) => {
      e.preventDefault();
      onClick?.();
      const doScroll = () => {
        const lenis = window.__lenis;
        if (!id) {
          if (lenis) lenis.scrollTo(0);
          else window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const el = document.getElementById(id);
          if (!el) return;
          if (lenis) lenis.scrollTo(el, { offset: -72 });
          else el.scrollIntoView({ behavior: "smooth" });
        }
      };
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(doScroll, 80);
      } else {
        doScroll();
      }
    };
    return (
      <a href={to} onClick={handle} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
