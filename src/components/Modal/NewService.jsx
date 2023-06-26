import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import s from "./Login.module.scss";

const Input = ({ name, label, register, required }) => (
  <TextField
    color="success"
    variant="outlined"
    label={label}
    autoComplete="off"
    defaultValue=""
    sx={{ bgcolor: "#ffffff" }}
    {...register(`${name}`, { required })}
  />
);

export const NewService = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={s.background}>
      <h2>Category</h2>
      <form
        name="add_service_form"
        onSubmit={handleSubmit(onSubmit)}
        className={s.label}
      >
        <Input
          label="Nazwa usługi"
          name="name"
          autocomplete="on"
          register={register}
          required
        />
        <fieldset>
          <label>Pani</label>
          <Input label="Cena standard" register={register} name="woman.cost" />
          <Input
            label="Cena z kartą"
            register={register}
            name="woman.costByCard"
          />
        </fieldset>
        <fieldset>
          <label>Pan</label>
          <Input label="Cena standard" register={register} name="man.cost" />
          <Input
            label="Cena z kartą"
            register={register}
            name="man.costByCard"
          />
        </fieldset>
        <button type="submit">add new service</button>
      </form>
    </div>
  );
};
