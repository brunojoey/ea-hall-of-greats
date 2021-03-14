import _ from 'lodash';
import { useReducer, useRef, useCallback, useEffect } from 'react';
import { Search, Grid, Header, Segment } from 'semantic-ui-react';

function SearchBar({games, history}) {
  const source = _.times(5, (i) => ({
    ceremony: games.hallOfGreat,
    nominatedBy: games.ally,
    title: games.game,
    genre: games.genre,
    developer: games.developer,
    year: games.year,
    metacritic: games.metacritic,
    votes: games.votes,
    victory: games.victory,
    banned: games.banned,
  }));
  console.log('source', source);
  
  const initialState = {
    loading: false,
    results: [],
    value: '',
  }
  
  function reduce(state, action) {
    switch (action.type) {
      case 'CLEAN_QUERY':
        return initialState
      case 'START_SEARCH':
        return { ...state, loading: true, value: action.query }
      case 'FINISH_SEARCH':
        return { ...state, loading: false, results: action.results }
      case 'UPDATE_SELECTION':
        return { ...state, value: action.selection }
  
      default:
        throw new Error()
    }
  }
  const [state, dispatch] = useReducer(reduce, initialState);
  const { loading, results, value } = state;

  const timeoutRef = useRef();

  const handleSearchChange = useCallback((e, data) => {
    clearTimeout(timeoutRef.current)
    dispatch({ type: 'START_SEARCH', query: data.value })

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' })
        return
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i')
      const isMatch = (result) => re.test(result.title);
      console.log('result', isMatch);

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(source, isMatch),
      })
    }, 300)
  }, [source]);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <Grid>
      <Grid.Column width={6}>
        <Search
          loading={loading}
          onResultSelect={(e, data) =>
            dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
          }
          onSearchChange={handleSearchChange}
          results={results}
          value={value}
        />
      </Grid.Column>

      <Grid.Column width={10}>
        <Segment>
          <Header>State</Header>
          <pre style={{ overflowX: 'auto' }}>
            {JSON.stringify({ loading, results, value }, null, 2)}
          </pre>
          <Header>Options</Header>
          <pre style={{ overflowX: 'auto' }}>
            {JSON.stringify(source, null, 2)}
          </pre>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default SearchBar