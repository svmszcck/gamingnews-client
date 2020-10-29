import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { Section, Card, Image } from "components";
import { mobile } from "utils/responsive";
import Colors from "app_constants/colors";
import { Game } from "types";

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

const Styled = styled.div<StyledType>`
  padding: 130px 2vw 80px 2vw;
  .search {
    width: ${({ isMobile }) => (isMobile ? "100%" : "320px")};
    border-radius: 5px;
    margin-bottom: 30px;
  }
  .searchFailed {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 400px;
    }
    .warning {
      margin-top: 20px;
      color: ${Colors.WHITE};
    }
  }
`;

type SearchViewProps = {
  elements: Array<Game>;
  query: string | null;
};

type StyledType = {
  isMobile: boolean;
};

export default SearchView;
