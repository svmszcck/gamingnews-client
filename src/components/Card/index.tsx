import React from "react";
import styled from "styled-components";

import { Image } from "components";
import Colors from "app_constants/colors";

const Card = ({ name, image, alt }: CardProps) => {
  return (
    <Styled>
      <Image src={image} className="cover" alt={alt ? alt : "Game Cover"} />
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
  .cover {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  .gameTitle {
    margin-top: 10px;
    color: ${Colors.GRAY_LIGHT};
    text-align: center;
  }
`;

export default Card;
