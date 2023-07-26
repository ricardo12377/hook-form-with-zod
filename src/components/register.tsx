import { FC } from "react";
import { useAppDispatch } from "@/hooks/hooks";
import { auth, registerUser } from "@/store/modules/auth/thunks";
import { z } from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  name: string;
  last_name: string;
  login: string;
  password: string;
  team_id: string;
};

export const Register: FC = () => {
  const dispatch = useAppDispatch();

  const schema = z.object({
    name: z.string().min(3, { message: "Required" }),
    last_name: z.string().min(3, { message: "Required" }),
    login: z.string().min(5, { message: "Required" }),
    password: z.string().min(5, { message: "Required" }),
    team_id: z.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    dispatch(registerUser(data));
  });

  return (
    <form
      className="w-1/5 h-2/5 bg-gray-900 flex flex-col items-center pt-10"
      onSubmit={onSubmit}
    >
      <label htmlFor="login">Login:</label>
      <input type="text" className="w-3/5" {...register("login")} />
      {errors.login && <p>{errors.login.message}</p>}

      <label htmlFor="password">Password</label>
      <input type="password" className="w-3/5" {...register("password")} />
      {errors.password && <p>{errors.password.message}</p>}

      <button className="mt-10 bg-gray-800 w-32" type="submit">
        Logar
      </button>
    </form>
  );
};
