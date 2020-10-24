import React from "react";
import styled from "styled-components";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Colors from "app_constants/colors";

const Search = ({ className, onClick }: SearchProps) => {
  return (
    <Styled>
      <div className={cn("container", className)}>
        <FontAwesomeIcon
          icon={faSearch}
          color={Colors.GRAY}
          className="searchIcon"
          onClick={onClick}
        />
        <input className="searchInput" placeholder="Search..." />
      </div>
    </Styled>
  );
};

const Styled = styled.div`
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
      &:focus {
        outline: none;
        width: 300px;
      }
    }
  }
`;

type SearchProps = {
  className?: string;
  onClick: () => void;
};

export default Search;
