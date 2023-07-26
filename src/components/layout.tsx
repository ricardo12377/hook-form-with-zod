import { useAppSelector } from "@/hooks/hooks";
import { FC, ReactNode } from "react";
import useMyRootTools from "@/infra/nextTools";

export interface Props {
  children: ReactNode;
}

export const PrivateRoute: FC<Props> = ({ children }) => {
  const { router } = useMyRootTools();

  const { isLogged } = useAppSelector((state) => state.auth);

  if (!isLogged) return router.push("/404");

  return <>{children}</>;
};
