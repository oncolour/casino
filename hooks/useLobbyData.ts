import React from "react";
import { Game, Studio, Tag } from "@/lib/types";

const LOBBY_DATA_URL =
  "https://cubeia-code-tests.s3.eu-west-1.amazonaws.com/lobby.json";

interface UseLobbyDataReturn {
  games: Game[];
  studios: Studio[];
  tags: Tag[];
  loading: boolean;
  error: string | null;
}

/**
 * Custom hook to fetch lobby data
 */
export function useLobbyData(): UseLobbyDataReturn {
  const [games, setGames] = React.useState<Game[]>([]);
  const [studios, setStudios] = React.useState<Studio[]>([]);
  const [tags, setTags] = React.useState<Tag[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    /* Used to ensure the component is still mounted before updating state */
    const controller = new AbortController();

    async function fetchLobbyData() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(LOBBY_DATA_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch lobby data: ${response.status}`);
        }

        const data = await response.json();

        setGames(data.games); /* Sanitize or process games data if needed */
        setStudios(data.studios);
        setTags(data.tags);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          // Fetch was cancelled, do nothing
          return;
        }
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching lobby data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchLobbyData();

    return () => {
      controller.abort(); // Cancel the fetch on unmount
    };
  }, []);

  return { games, studios, tags, loading, error };
}
