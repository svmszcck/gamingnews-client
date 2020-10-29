import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { Section, Card, Image } from "components";
import { mobile } from "utils/responsive";
import { Game } from "types";
import Styled from "./styles";

import searchNoResult from "assets/images/search-no-result.png";

const SearchView = ({ elements, query }: SearchViewProps) => {
  const isMobile = useMediaQuery(mobile);

  return (
    <Styled isMobile={isMobile}>
      <div className="container is-fluid">
        {query ? (
          <Section title={`Search Results for "${query}"`}>
            <Grid className="grid">
              <Row>
                {elements.map((element: Game, index: number) => (
                  <Col xs={6} lg={3} key={index.toString()}>
                    <Link to={`/game/${element.id}`}>
                      <Card
                        id={element.id}
                        name={element.name}
                        image={element.image.medium_url}
                      />
                    </Link>
                  </Col>
                ))}
              </Row>
            </Grid>
          </Section>
        ) : (
          <div className="searchFailed">
            <Image src={searchNoResult} alt="No Search Result" />
            <h5 className="subtitle is-5 warning">No Search Results :(</h5>
          </div>
        )}
      </div>
    </Styled>
  );
};

type SearchViewProps = {
  elements: Array<Game>;
  query: string | null;
};

export default SearchView;
