import React, { useMemo } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import { Game } from "types";
import { Image } from "components";
import { generateImage } from "utils/general";
import Styled from "./styles";

const CachedView = ({ id, image, name }: CachedViewProps) => {
  const cover = useMemo(() => image, [id]);
  return (
    <Image
      src={require(cover)}
      className="cover"
      alt={name ? name : "Game Cover"}
    />
  );
};

const GameView = ({ game }: GameViewProps) => {
  const { id, name } = game;

  return (
    <Styled>
      {id && (
        <Grid className="grid">
          <Row>
            <Col xs={6} lg={4}>
              <Image
                id={id}
                isCached
                src={require(`assets/images/gameImages/${generateImage()}`)}
                className="cover"
                alt={name ? name : "Game Cover"}
              />
            </Col>
          </Row>
        </Grid>
      )}
    </Styled>
  );
};

type GameViewProps = {
  game: Game;
};

type CachedViewProps = {
  id: string;
  image: string;
  name: string;
};

export default GameView;
