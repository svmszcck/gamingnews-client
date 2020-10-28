import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { Section, Card, Image } from "components";
import { mobile } from "utils/responsive";
import { Game } from "types";

import search from "assets/images/search.png";

const SearchView = ({ elements }: SearchViewProps) => {
  const isMobile = useMediaQuery(mobile);

  return (
    <Styled isMobile={isMobile}>
      <div className="container is-fluid">
        <Image src={search} alt="Search Results" className="search" />
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

const Styled = styled.div<StyledType>`
  padding: 130px 2vw 80px 2vw;
  .search {
    width: ${({ isMobile }) => (isMobile ? "100%" : "350px")};
    border-radius: 5px;
    margin-bottom: 30px;
  }
`;

type SearchViewProps = {
  elements: Array<Game>;
};

type StyledType = {
  isMobile: boolean;
};

export default SearchView;
