/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { updateNavbar } from "store/actions/ui";

const ScrollDetector = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    doUpdateNavbar();
    window.onscroll = () => {
      doUpdateNavbar();
    };
    return () => {
      window.onscroll = null;
    };
  }, []);

  const doUpdateNavbar = () => {
    const scrolled = window.pageYOffset > 50;
    dispatch(updateNavbar(scrolled));
  };

  return <div></div>;
};

export default ScrollDetector;
