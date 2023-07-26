import { PrivateRoute } from "@/components/layout";
import { StoreProvider } from "@/providers/storeProvider";
import { HomeScreen } from "@/screens/home";

export default function HomePage() {
  return (
    <StoreProvider>
      <PrivateRoute>
        <HomeScreen />
      </PrivateRoute>
    </StoreProvider>
  );
}
