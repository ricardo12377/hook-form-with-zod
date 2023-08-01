import { z } from "zod";

export const schema = z.object({
  name: z.string().min(3, { message: "Required" }),
  last_name: z.string().min(3, { message: "Required" }),
  login: z.string().min(5, { message: "Required" }),
  password: z
    .string()
    .min(5, { message: "password must be than 4 characteres" }),
  confirm_password: z
    .string()
    .min(5, { message: "password must be equal to password" }),
  team_id: z.string(),
});
