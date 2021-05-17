import { useReducer, useRef, useCallback, useEffect, useState } from "react";
import NomineeTable from "../components/Table/nomineeTable";
import SearchBar from "../components/SearchBar";
import StarDecoration from "../components/StarDecoration";
import gamesAPI from "../utils/gamesAPI";
import "./Pages.scss";
import _ from "lodash";

function Nominations({ history }) {
  const [games, setGames] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const gamesList = [...games];

  const initialState = {
    loading: false,
    results: '',
    value: "",
  };

  function reduce(state, action) {
    switch (action.type) {
      case "CLEAN_QUERY":
        return initialState;
      case "START_SEARCH":
        return { ...state, loading: true, value: action.query };
      case "FINISH_SEARCH":
        return { ...state, loading: false, results: action.results };
      case "UPDATE_SELECTION":
        return { ...state, value: action.selection };

      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reduce, initialState);
  const { loading, results, value } = state;

  const timeoutRef = useRef();

  const handleSearchChange = useCallback(
    (e, data) => {
      clearTimeout(timeoutRef.current);
      dispatch({ type: "START_SEARCH", query: data.value });

      timeoutRef.current = setTimeout(() => {
        if (data.value.length === 0) {
          dispatch({ type: "CLEAN_QUERY" });
          return;
        }

        // returns {query}/i
        const re = new RegExp(_.escapeRegExp(data.value), "i");
        const isMatch = (result) => re.test(result.game);

        dispatch({
          type: "FINISH_SEARCH",
          results: _.filter(gamesList, isMatch),
        });
      }, 300);
    },
    [gamesList]
  );

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      setGames(data);
    }

    fetchData();
  }, [setGames]);

  return (
    <main className="nominations-page">
      <StarDecoration />
      <h2 className="nominations-page-heading">The Notorious Nominees</h2>
      <SearchBar
        value={value}
        loading={loading}
        timeoutRef={timeoutRef}
        dispatch={dispatch}
        handleSearchChange={handleSearchChange}
      />
        <NomineeTable
          games={gamesList}
          history={history}
          results={results}
          value={value}
          loading={loading}
          timeoutRef={timeoutRef}
          dispatch={dispatch}
          handleSearchChange={handleSearchChange}
        />
      <StarDecoration />
    </main>
  );
}

export default Nominations;
