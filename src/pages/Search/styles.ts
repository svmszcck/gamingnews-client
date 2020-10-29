import styled from "styled-components";

import Colors from "app_constants/colors";

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

type StyledType = {
  isMobile: boolean;
};

export default Styled;
