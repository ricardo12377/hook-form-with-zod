import { FC } from "react";
import { useAppDispatch } from "@/hooks/hooks";
import { auth } from "@/store/modules/auth/thunks";
import { z } from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  login: string;
  password: string;
};

export const Login: FC = () => {
  const dispatch = useAppDispatch();

  const schema = z.object({
    name: z.string().min(1, { message: "Required" }),
    age: z.number().min(10),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    dispatch(auth({ login: data.login, password: data.password }));
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
