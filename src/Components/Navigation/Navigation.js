import "./Navigation.css";

import house from "./house.svg";
import bookmark from "./bookmark.svg";
import square from "./square-plus-regular.svg";
import user from "./user.svg";

export function Navigation() {
  return (
    <nav className="navbar">
      <a href="/index.html" className="navbar__item navbar__item--active">
        <img src={house} alt="Home" />
      </a>
      <a href="/bookmarks.html" className="navbar__item">
        <img src={bookmark} alt="Bookmarks" />
      </a>
      <a href="/form.html" className="navbar__item">
        <img src={square} alt="Form" />
      </a>
      <a href="/profile.html" className="navbar__item">
        <img src={user} alt="Profile" />
      </a>
    </nav>
  );
}
