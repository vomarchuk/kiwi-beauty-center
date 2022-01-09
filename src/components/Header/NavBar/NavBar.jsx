import * as React from "react";

import { useState } from "react";
import Hamburger from "hamburger-react";

import s from "./NavBar.module.scss";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

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

  return (
    <div className={s.NavBar}>
      <div className={s.hamburger}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <NavList />
      </SwipeableDrawer>
    </div>
  );
};

export default NavBar;
