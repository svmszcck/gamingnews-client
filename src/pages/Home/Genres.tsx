/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styled from "styled-components";

import { Button, Section } from "components";
import Colors from "app_constants/colors";
import { Genre } from "types";

const Genres = ({ elements }: GenresProps) => {
  return (
    <Styled>
      <Section title="Genres">
        <div className="genres">
          {elements.map((genre: Genre) => (
            <Button
              type="is-primary"
              className="action"
              onClick={() => window.open(genre.site_detail_url, "_blank")}
            >
              {genre.name}
            </Button>
          ))}
        </div>
      </Section>
    </Styled>
  );
};

const Styled = styled.div`
  margin-top: 50px;
  .title {
    color: ${Colors.WHITE};
  }
  .genres {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .action {
      color: ${Colors.GRAY_LIGHT};
      margin: 0 20px 20px 0;
    }
  }
`;

type GenresProps = {
  elements: Array<Genre>;
};

export default Genres;
