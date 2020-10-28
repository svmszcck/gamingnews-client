import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";

import { Section, Card } from "components";
import { Game } from "types";

const SearchView = ({ elements }: SearchViewProps) => {
  return (
    <Styled>
      <div className="container is-fluid">
        <Section title="Search Results">
          <Grid className="grid">
            <Row>
              {elements.map((element: Game, index: number) => (
                <Col xs={6} lg={3} key={index.toString()}>
                  <Link to={`/game/${element.id}`}>
                    <Card
                      name={element.name}
                      image={element.image.medium_url}
                    />
                  </Link>
                </Col>
              ))}
            </Row>
          </Grid>
        </Section>
      </div>
    </Styled>
  );
};

const Styled = styled.div`
  padding: 130px 2vw 80px 2vw;
`;

type SearchViewProps = {
  elements: Array<Game>;
};

export default SearchView;
