import { useForm } from "react-hook-form";
import { Input } from "../Input";
import Button from "../Button";

import * as servicesOperations from "../../redux/services/servicesOperations";

import s from "./Modals.module.scss";
import { useDispatch } from "react-redux";

export const NewService = ({ toggle, categoryId, closeModal }) => {
  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const newService = {
      categoryId: categoryId["_id"],
      newService: data,
    };
    dispatch(servicesOperations.addServiceByCategory(newService));
    reset();
    closeModal();
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
            type="number"
            className="cost"
            label="Cena standard"
            register={register}
            name="price.woman.cost"
          />
          <Input
            type="number"
            className="cost"
            label="Cena z kartą"
            register={register}
            name="price.woman.costByCard"
          />
        </fieldset>
        <fieldset className={s.fieldset}>
          <label className={s.label}>Pan</label>
          <Input
            type="number"
            className="cost"
            label="Cena standard"
            register={register}
            name="price.man.cost"
          />
          <Input
            type="number"
            className="cost"
            label="Cena z kartą"
            register={register}
            name="price.man.costByCard"
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
