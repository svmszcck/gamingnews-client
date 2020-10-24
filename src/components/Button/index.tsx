import React from "react";
import cn from "classnames";
import styled from "styled-components";

import Colors from "app_constants/colors";

const Button = ({
  type = "is-primary",
  className,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <Styled>
      <button onClick={onClick} className={cn("button", type, className)}>
        {children}
      </button>
    </Styled>
  );
};

const Styled = styled.div`
  .button {
    &:focus {
      box-shadow: none !important;
    }
  }
  .is-danger {
    background-color: ${Colors.DANGER};
    &:hover {
      background-color: ${Colors.DANGER_DARK};
    }
  }
  .is-primary {
    background-color: ${Colors.SECONDARY};
    &:hover {
      background-color: ${Colors.SECONDARY_LIGHT};
    }
  }
`;

type ButtonProps = {
  type?: string;
  children: string;
  className?: string;
  onClick: () => void;
};

export default Button;
