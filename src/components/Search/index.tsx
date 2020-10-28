import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { handleEnter } from "utils/general";
import { useParams } from "hooks";
import Colors from "app_constants/colors";

const Search = ({ className, onClick }: SearchProps) => {
  const [value, setValue] = useState<string>("");
  const [focused, setFocused] = useState<boolean>(false);
  const history = useHistory();
  const params = useParams();
  const query = params.get("query");
  const active = focused || value !== "";

  useEffect(() => {
    if (query) setValue(query);
  }, [query]);

  return (
    <Styled active={active}>
      <div className={cn("container", className)}>
        <Link to={`/search?query=${value}`} className="logoContanier">
          <FontAwesomeIcon
            icon={faSearch}
            color={Colors.GRAY}
            className="searchIcon"
            onClick={() => onClick(value)}
          />
        </Link>
        <input
          className="searchInput"
          placeholder="Search..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={(e) =>
            handleEnter(e, () => history.push(`/search?query=${value}`))
          }
        />
      </div>
    </Styled>
  );
};

const Styled = styled.div<StyledType>`
  .container {
    display: flex;
    align-items: center;
    background-color: ${Colors.SECONDARY};
    border-radius: 5px;
    padding: 5px 20px 5px 20px;
    .searchIcon {
      margin-right: 10px;
      cursor: pointer;
    }
    .searchInput {
      border: 0;
      background-color: ${Colors.SECONDARY};
      color: ${Colors.WHITE};
      font-weight: bold;
      height: 30px;
      transition: all 0.2s linear;
      width: 200px;
      ${({ active }) => active && "outline: none; width: 300px;"}
      &:focus {
        outline: none;
      }
    }
  }
`;

type SearchProps = {
  className?: string;
  onClick: (value: string) => void;
};

type StyledType = {
  active: boolean;
};

export default Search;
