"use client";

import Button from "@/components/ui/Button";
import GameCard from "@/components/games/GameCard";
import { useLobby } from "@/hooks/useLobby";
import GameGridLoading from "./GameGridLoading";

export default function GameGrid() {
  const {
    filteredGames,
    availableStudios,
    totalGameCount,
    displayedGameCount,
    hasMore,
    loading,
    loadMore,
  } = useLobby();

  return (
    <section>
      <header className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">🔥 Hotest games</h2>
        <div className="text-white/80">
          Showing {displayedGameCount} of {totalGameCount}{" "}
          {totalGameCount === 1 ? "game" : "games"}
        </div>
      </header>

      {loading ? (
        <GameGridLoading />
      ) : (
        <>
          {/* Games Grid */}
          {filteredGames.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              No games found with the selected filters.
            </div>
          ) : (
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
              {filteredGames.map((game) => {
                const studio = availableStudios.find(
                  (s) => s.id === game.studioId
                );

                if (!studio) return null;

                return (
                  <li key={game.id}>
                    <GameCard game={game} studio={studio} />
                  </li>
                );
              })}
            </ul>
          )}

          {/* Load More Button */}
          {hasMore && (
            <div className="flex justify-center mt-16">
              <Button variant="primary" size="large" onClick={loadMore}>
                Load More Games
              </Button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
