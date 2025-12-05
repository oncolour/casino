import React from "react";
import { LobbyContext, LobbyContextType } from "@/context/LobbyContext";

// Hook to use the lobby context
export function useLobby(): LobbyContextType {
  const context = React.useContext(LobbyContext);
  if (context === undefined) {
    throw new Error("useLobby must be used within a LobbyProvider");
  }
  return context;
}
