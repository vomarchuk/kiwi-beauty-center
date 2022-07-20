import * as React from "react";

import { makeStyles } from "@mui/styles";
import { useState } from "react";
import Hamburger from "hamburger-react";
import s from "./NavBar.module.scss";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Drawer from "@mui/material/Drawer";

import { styled } from "@mui/system";

import NavList from "../NavList";

const useStyles = makeStyles({
  drawer: {
    background: "#cccccc",
  },
});

const NavBar = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const classes = useStyles();
  console.log(classes);
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

  const MyDrawer = styled(SwipeableDrawer)({
    ".MuiBackdrop-root": {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
    ".MuiPaper-root": {
      height: "100vh",
      position: "absolute",
      color: "rgba(255, 0, 255,)",
    },
    ".MuiDrawer-root": {
      height: "50vh",
      weight: "1440px",
      // position: 'absolute',
      // left: '100px',
    },
  });

  // return (
  //   <div>
  //     <Drawer
  //       className={classes.drawer}
  //       variant="permanent"
  //       anchor="right"
  //       classes={{ paper: classes.drawerPaper }}
  //     >
  //       <div>sasdasdasdasdasdasdasdas</div>
  //     </Drawer>
  //   </div>
  // );

  return (
    <div className={s.NavBar}>
      <div className={s.hamburger}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <MyDrawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <NavList />
      </MyDrawer>
    </div>
  );
};

export default NavBar;
