import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import { Button, Image } from "components";
import Colors from "app_constants/colors";

const Cover = () => {
  return (
    <Styled>
      <Grid className="grid">
        <Row>
          <Col xs={12} lg={6}>
            <h5 className="title is-5 category">GAME OF THE DAY</h5>
            <h1 className="title is-1 header">
              Explore Dota 2 with game-play videos & photos
            </h1>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              convallis quis nibh eu maximus. Sed ut magna felis. Aliquam risus
              est, tincidunt quis enim ac, commodo pulvinar velit. Sed in mauris
              nibh. Integer dictum arcu bibendum ante elementum ullamcorper.
            </p>
            <Button type="is-danger" className="action">
              Read More
            </Button>
          </Col>
          <Col xs={12} lg={6}>
            <Image
              src="https://playerbros.com/wp-content/uploads/2019/10/dota2mam.jpg"
              alt="Dota 2"
              className="cover"
            />
          </Col>
        </Row>
      </Grid>
    </Styled>
  );
};

const Styled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  .grid {
    width: 100%;
    padding: 0;
    margin: 0;
    .cover {
      border-radius: 5px;
    }
    .category {
      color: ${Colors.DANGER};
    }
    .header {
      color: ${Colors.WHITE};
    }
    .description {
      color: ${Colors.GRAY_LIGHT};
    }
    .action {
      margin: 20px 0 30px 0;
    }
  }
`;

export default Cover;
