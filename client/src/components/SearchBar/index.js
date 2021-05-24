import { Search, Grid } from "semantic-ui-react";
import { useEffect } from "react";
import "./SearchBar.scss";

function SearchBar({
  value,
  loading,
  timeoutRef,
  dispatch,
  handleSearchChange,
}) {
  useEffect(() => {
    const timeout = timeoutRef.current;
    return () => {
      clearTimeout(timeout);
    };
  }, [timeoutRef]);

  return (
    <Grid>
      <Grid.Column width={6}>
        <Search
          loading={loading}
          onResultSelect={(e, data) =>
            dispatch({ type: "UPDATE_SELECTION", selection: data.result })
          }
          onSearchChange={handleSearchChange}
          placeholder="Search Nominees"
          value={value}
          showNoResults={false}
          style={{ display: "flex" }}
        />
      </Grid.Column>
    </Grid>
  );
}

export default SearchBar;
