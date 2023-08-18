import ReplyIcon from "@mui/icons-material/Reply";

import s from "./GoBack.module.scss";

export const GoBack = () => (
  <a href="/" className={s.link}>
    <ReplyIcon />
  </a>
);

// history.back();
