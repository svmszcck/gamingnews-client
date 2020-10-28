/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "hooks";
import { Store } from "types";
import { search } from "store/actions/posts";
import SearchView from "./view";

const Search = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const query = params.get("query");
  const { searchedGames } = useSelector((state: Store) => state.posts);

  useEffect(() => {
    if (query) dispatch(search(query));
  }, [query]);

  return <SearchView elements={searchedGames} query={query} />;
};

export default Search;
