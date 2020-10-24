import React from "react";
import styled from "styled-components";
import cn from "classnames";

import placeholder from "assets/images/profilephoto.jpg";

const Avatar = ({ size = 100, url, className, onClick }: AvatarProps) => {
  return (
    <Styled size={size}>
      <img
        className={cn("circularImg", className)}
        src={url || placeholder}
        alt="Avatar"
        onClick={onClick}
      />
    </Styled>
  );
};

const Styled = styled.div<StyledType>`
  .circularImg {
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    object-fit: cover;
    display: block;
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
  }
`;

type AvatarProps = {
  size?: number;
  url?: string;
  className?: string;
  onClick?: () => void;
};

type StyledType = {
  size: number;
};

export default Avatar;
