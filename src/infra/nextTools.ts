import { useRouter } from "next/router";

function useMyRootTools() {
  const router = useRouter();

  const reload = window.location.reload();

  return {
    router,
    reload,
  };
}

export default useMyRootTools;
