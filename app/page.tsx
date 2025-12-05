import { LobbyProvider } from "@/context/LobbyContext";
import CasinoLobby from "@/components/CasinoLobby";

export default function Home() {
  return (
    <LobbyProvider>
      <CasinoLobby />
    </LobbyProvider>
  );
}
