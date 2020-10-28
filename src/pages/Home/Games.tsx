/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";

import { Card, Section } from "components";
import { Game } from "types";

const Games = ({ elements, loadElements }: GamesProps) => {
  return (
    <Styled>
      <Section title="Games">
        <InfiniteScroll
          pageStart={1}
          loadMore={loadElements}
          hasMore
          loader={<div className="loader" key={0}></div>}
          initialLoad={true}
        >
          <Grid className="grid">
            <Row>
              {elements.map((game: Game, index: number) => (
                <Col xs={6} lg={3} key={index.toString()}>
                  <Link to={`/game/${game.id}`}>
                    <Card name={game.name} image={game.image.medium_url}></Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </Grid>
        </InfiniteScroll>
      </Section>
    </Styled>
  );
};

const Styled = styled.div`
  .grid {
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;

type GamesProps = {
  elements: Array<Game>;
  loadElements: (page: number) => void;
};

export default Games;
