import * as React from "react";

import { useState } from "react";
import Hamburger from "hamburger-react";
import s from "./NavBar.module.scss";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { styled } from "@mui/system";

import NavList from "../NavList";

const NavBar = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    return setOpen(open);
  };

  const MyX = styled(SwipeableDrawer)({
    ".MuiPaper-root": {
      height: "100vh",
      position: "absolute",
      class: "asdasdsadasd",
      name: "MuiMuiMui",
    },
  });

  return (
    <div className={s.NavBar}>
      <div className={s.hamburger}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <MyX
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <NavList />
      </MyX>
    </div>
  );
};

export default NavBar;
