import { useNavigate } from "react-router-dom";
import { Back } from "../SVG/Back";
import s from "./GoBack.module.scss";

export const GoBack = () => {
  const navigate = useNavigate();
  const goBack = () => navigate("/", { replace: true });
  return (
    <button type="button" onClick={goBack} className={s.btn}>
      <Back />
    </button>
  );
};
