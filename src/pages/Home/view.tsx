import React from "react";

import Cover from "./Cover";
import Genres from "./Genres";
import Styled from "./styles";

const HomeView = () => {
  return (
    <Styled>
      <div className="container">
        <div className="topSection">
          <Cover />
        </div>
        <Genres />
      </div>
    </Styled>
  );
};

export default HomeView;
