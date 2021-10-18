import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

const Search: FC = () => (
  <form action="/search" className="search">
    <input
      type="search"
      className="search__input"
      name="q"
      aria-label="Search quakker"
      placeholder="Search Quakker"
    />
    <FontAwesomeIcon icon={faSearch} className="search__icon" />
  </form>
);

export default Search;
