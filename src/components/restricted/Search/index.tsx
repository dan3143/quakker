import { useLocation } from "react-router";
import useQuaks from "hooks/useQuaks";
import Quak from "components/common/Quak";
import "./search.scss";
import Metadata from "components/common/Metadata";
import SearchForm from "components/restricted/Sidebar/Search";

const Search = () => {
  const [quaks, ..._] = useQuaks();
  const query = new URLSearchParams(useLocation().search).get("q") ?? "";
  const searchResults =
    query === ""
      ? []
      : quaks
          .filter(
            (quak) =>
              quak.type !== "requak" &&
              quak.content
                ?.toLocaleLowerCase()
                .includes(query?.toLocaleLowerCase())
          )
          .slice(0, 10);
  let results = (
    <p className="search-results__message">Try searching for something</p>
  );
  if (query !== "") {
    if (searchResults.length === 0) {
      results = (
        <p className="search-results__message">
          There are no quaks matching that query.
        </p>
      );
    } else {
      results = (
        <div className="search-results__quaks">
          {searchResults.map((quak) => (
            <Quak key={quak.id} quak={quak} />
          ))}
        </div>
      );
    }
  }
  return (
    <main className="search-results">
      <Metadata title="Search results" />
      <SearchForm />
      <h1>
        {query === "" ? "Search something" : `Search results for ${query}`}
      </h1>
      {results}
    </main>
  );
};

export default Search;
