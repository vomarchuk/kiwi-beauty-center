import { useForm } from "react-hook-form";
import { useAddServiceMutation } from "../../redux/services/servicesSlice";
import { Input } from "../Input";
import { Button } from "../Button";
import s from "./Modals.module.scss";

export const CreateNewServiceModal = ({ toggle, categoryId, closeModal }) => {
  const { register, handleSubmit, reset } = useForm();
  const [addService] = useAddServiceMutation();

  const onSubmit = (data) => {
    const price = data.price;
    if (price.man.cost === "") price.man.cost = null;
    if (price.man.costByCard === "") price.man.costByCard = null;
    if (price.woman.cost === "") price.woman.cost = null;
    if (price.woman.costByCard === "") price.woman.costByCard = null;

    const newService = {
      categoryId: categoryId["_id"],
      newService: data,
    };
    addService(newService);
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
