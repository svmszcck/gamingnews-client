import React, { ReactNode } from "react";
import styled from "styled-components";

import Colors from "app_constants/colors";

const Section = ({ title, children }: SectionProps) => {
  return (
    <Styled>
      <h1 className="title is-4">{title}</h1>
      {children}
    </Styled>
  );
};

const Styled = styled.div`
  .title {
    color: ${Colors.WHITE};
  }
`;

type SectionProps = {
  title: string;
  children: ReactNode;
};

export default Section;
