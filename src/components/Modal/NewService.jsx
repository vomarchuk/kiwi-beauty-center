import { useForm } from "react-hook-form";
import { Input } from "../Input";
import Button from "../Button";

import s from "./Modals.module.scss";

export const NewService = ({ toggle }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={s.background} onClick={toggle}>
      <form
        name="add_service_form"
        onSubmit={handleSubmit(onSubmit)}
        className={s["add_service_form"]}
      >
        <Input
          className="service_name"
          label="Nazwa usługi"
          name="name"
          autocomplete="on"
          register={register}
          required
        />
        <fieldset className={s.fieldset}>
          <label className={s.label}>Pani</label>
          <Input
            className="cost"
            label="Cena standard"
            register={register}
            name="woman.cost"
          />
          <Input
            className="cost"
            label="Cena z kartą"
            register={register}
            name="woman.costByCard"
          />
        </fieldset>
        <fieldset className={s.fieldset}>
          <label className={s.label}>Pan</label>
          <Input
            className="cost"
            label="Cena standard"
            register={register}
            name="man.cost"
          />
          <Input
            className="cost"
            label="Cena z kartą"
            register={register}
            name="man.costByCard"
          />
        </fieldset>
        <Button
          name="add new service"
          typeBtn="submit"
          variant="more--service"
        />
      </form>
    </div>
  );
};
