import React from "react";
import styled from "styled-components";

import { Image } from "components";
import Colors from "app_constants/colors";

const Card = ({ name, image, alt }: CardProps) => {
  return (
    <Styled>
      <div className="imageContainer">
        <Image src={image} className="cover" alt={alt ? alt : "Game Cover"} />
      </div>
      <p className="subtitle is-6 gameTitle">{name}</p>
    </Styled>
  );
};

type CardProps = {
  name: string;
  image: string;
  url?: string;
  alt?: string;
};

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
  .imageContainer {
    position: relative;
    &:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
    .cover {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .gameTitle {
    margin-top: 10px;
    color: ${Colors.GRAY_LIGHT};
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default Card;
