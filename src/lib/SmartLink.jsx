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
        if (!id) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
