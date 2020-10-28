import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";

import { Avatar, Modal, Search } from "components";
import Colors from "app_constants/colors";
import { mobileTablet } from "utils/responsive";
import { Store } from "types";

const RenderModal = ({ modal, showModal }: RenderModalProps) => {
  return (
    <Modal
      title="Warning"
      content="This item has no functionality yet :("
      isActive={modal}
      show={showModal}
      isSuccess={false}
    />
  );
};

const Header = () => {
  const [modal, showModal] = useState(false);
  const isMobileTablet = useMediaQuery(mobileTablet);
  const { scrolled } = useSelector((state: Store) => state.ui);
  return (
    <Styled scrolled={scrolled}>
      <div className="navbar is-fixed-top">
        <RenderModal modal={modal} showModal={showModal} />
        <Link to="/" className="logoContanier">
          <FontAwesomeIcon icon={faGamepad} color={Colors.DANGER} size="3x" />
          <h2 className="logo title is-2">Gaming News</h2>
        </Link>
        <div className="rightMenu">
          {!isMobileTablet && <Search className="search" onClick={() => {}} />}
          <FontAwesomeIcon
            icon={faBell}
            color={Colors.DANGER}
            size="lg"
            className="bell"
            onClick={() => showModal(true)}
          />
          <Avatar
            size={40}
            className="avatar"
            onClick={() => showModal(true)}
          />
        </div>
      </div>
    </Styled>
  );
};

const Styled = styled.div<StyledType>`
  .navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 30px 10px 30px;
    background-color: ${({ scrolled }) =>
      scrolled ? Colors.WHITE : Colors.PRIMARY};
  }
  .logoContanier {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

    .logo {
      font-size: 20px;
      font-weight: bold;
      color: ${({ scrolled }) => (scrolled ? Colors.PRIMARY : Colors.WHITE)};
      margin-left: 15px;
    }
  }

  .rightMenu {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    .search {
      margin-right: 40px;
    }
    .bell {
      margin-right: 20px;
      cursor: pointer;
    }
    .avatar {
      cursor: pointer;
    }
  }
`;

type RenderModalProps = {
  modal: boolean;
  showModal: Function;
};

type StyledType = {
  scrolled: boolean;
};

export default Header;
