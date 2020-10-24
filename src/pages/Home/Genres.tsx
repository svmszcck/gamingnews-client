import React from "react";
import styled from "styled-components";

import { Button } from "components";
import Colors from "app_constants/colors";

const Genres = () => {
  return (
    <Styled>
      <h1 className="title is-4">Genres</h1>
      <Button type="is-primary" className="action">
        Read More
      </Button>
    </Styled>
  );
};

const Styled = styled.div`
  margin-top: 50px;
  .title {
    color: ${Colors.WHITE};
  }
  .action {
    color: ${Colors.GRAY_LIGHT};
  }
`;

export default Genres;
