import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { getTeamsForRegister, registerUser } from "@/store/modules/auth/thunks";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";
import { FormData } from "./types";

export const RegisterComponent: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTeamsForRegister());
  }, []);

  const teams = useAppSelector((state) => state.auth.getTeams.teams);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    dispatch(registerUser(data));
  });

  const validatePassword = (val: string) => {
    if (watch("password") != val) {
      return "Your passwords do no match";
    }
  };

  return (
    <form
      className="w-2/5 h-3/5 bg-gray-900 flex flex-col items-center pt-10 gap-2"
      onSubmit={onSubmit}
    >
      <label htmlFor="login">Login:</label>
      <input type="text" className="w-4/5" {...register("login")} />
      {errors.login && <p className="text-xs">{errors.login.message}</p>}

      <label htmlFor="name">Name</label>
      <input type="text" className="w-4/5" {...register("name")} />
      {errors.name && <p className="text-xs">{errors.name.message}</p>}

      <label htmlFor="last_name">Last name</label>
      <input type="text" className="w-4/5" {...register("last_name")} />
      {errors.last_name && (
        <p className="text-xs">{errors.last_name.message}</p>
      )}

      <label htmlFor="password">Password</label>
      <input type="password" className="w-4/5" {...register("password")} />
      {errors.password && <p className="text-xs">{errors.password.message}</p>}

      <label htmlFor="confirm_password">Confirm password</label>
      <input
        type="password"
        className="w-4/5"
        {...register("confirm_password", {
          required: true,
          validate: validatePassword,
        })}
      />
      {errors.confirm_password && (
        <p className="text-xs">{errors.confirm_password.message}</p>
      )}

      <label htmlFor="team" {...register("team_id")}>
        Team
      </label>
      <select name="team">
        {teams &&
          teams.map((team, index) => {
            return (
              <option key={team.id + index} value={team.id}>
                {team.team_name}
              </option>
            );
          })}
      </select>

      <button className="mt-10 bg-gray-800 w-32" type="submit">
        Logar
      </button>
    </form>
  );
};
