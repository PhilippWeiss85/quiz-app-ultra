import "./Navigation.css";
// import { useState } from "react";

export function Navigation({ page, setPage }) {
  // preventDefault muss hier rein sonst resettet sich das immer
  // const [activeNav, setActiveNav] = useState("home");
  return (
    <nav className="navbar">
      <button
        onClick={() => setPage("home")}
        className={page === "home" ? "navbar__item navbar__item--active" : "navbar__item"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          alt="Home"
          enableBackground="new 0 0 24 24"
          height="2rem"
          viewBox="0 0 24 24"
          width="2rem"
        >
          <rect fill="none" height="24" width="24" />
          <path d="M12,3L6,7.58V6H4v3.11L1,11.4l1.21,1.59L4,11.62V21h7v-6h2v6h7v-9.38l1.79,1.36L23,11.4L12,3z M10,1c0,1.66-1.34,3-3,3 C6.45,4,6,4.45,6,5H4c0-1.66,1.34-3,3-3c0.55,0,1-0.45,1-1H10z" />
        </svg>{" "}
      </button>
      <button
        href="/bookmarks.html"
        onClick={() => setPage("bookmark")}
        className={
          page === "bookmark" ? "navbar__item navbar__item--active" : "navbar__item"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          alt="Bookmarks"
          height="2rem"
          viewBox="0 0 24 24"
          width="2rem"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 18l2 1V3c0-1.1-.9-2-2-2H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13zM15 5H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z" />
        </svg>
      </button>
      <button
        href="/form.html"
        onClick={() => setPage("form")}
        className={page === "form" ? "navbar__item navbar__item--active" : "navbar__item"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          alt="Form"
          height="2rem"
          viewBox="0 0 24 24"
          width="2rem"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z" />
        </svg>
      </button>
      <button
        href="/profile.html"
        onClick={() => setPage("profile")}
        className={
          page === "profile" ? "navbar__item navbar__item--active" : "navbar__item"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          alt="Profile"
          height="2rem"
          viewBox="0 0 24 24"
          width="2rem"
        >
          <path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none" />
          <path d="M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z" />
        </svg>
      </button>
    </nav>
  );
}
