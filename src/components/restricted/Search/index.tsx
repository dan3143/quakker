import { useLocation } from "react-router";
import useQuaks from "hooks/useQuaks";
import Quak from "components/common/Quak";
import "./search.scss";
import Metadata from "components/common/Metadata";
import SearchForm from "components/restricted/Sidebar/Search";
import { useEffect, useState } from "react";
import { Quak as QuakType } from "types/quak";
import { searchQuaks } from "services/quaksService";
import Loading from "components/common/Loading";

const Search = () => {
  const query = new URLSearchParams(useLocation().search).get("q") ?? "";
  const [quaks, setQuaks] = useState<Array<QuakType>>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleDeleteQuak = (id: string) => {
    const filtered = quaks.filter((quak) => quak._id !== id);
    setQuaks(filtered);
  };

  useEffect(() => {
    searchQuaks(query)
      .then(setQuaks)
      .catch((err) => setQuaks([]));
    setIsLoading(false);
    return () => {
      setQuaks([]);
    };
  }, []);

  let results = (
    <p className="search-results__message">Try searching for something</p>
  );
  if (query !== "") {
    if (quaks.length === 0) {
      results = (
        <p className="search-results__message">
          There are no quaks matching that query.
        </p>
      );
    } else {
      results = (
        <div className="search-results__quaks">
          {quaks.map((quak) => (
            <Quak key={quak._id} quak={quak} onDelete={handleDeleteQuak} />
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
      {isLoading ? <Loading /> : results}
    </main>
  );
};

export default Search;
