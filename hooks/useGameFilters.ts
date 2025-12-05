import React from "react";
import { Game, Studio, Tag, Currency, ALL_CATEGORIES } from "@/lib/types";
import { filterGames, getAvailableStudios } from "@/lib/filterUtils";

const GAMES_PER_PAGE = 24;

interface UseGameFiltersReturn {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  categoryId: Tag["id"];
  setCategoryId: (categoryId: Tag["id"]) => void;
  studioId: Studio["id"] | null;
  setStudioId: (studioId: Studio["id"] | null) => void;
  filteredGames: Game[];
  availableStudios: Studio[];
  totalGameCount: number;
  displayedGameCount: number;
  hasMore: boolean;
  loadMore: () => void;
}

/**
 * Custom hook to manage game filters and filtered games
 */
export function useGameFilters(
  games: Game[],
  studios: Studio[]
): UseGameFiltersReturn {
  const [currency, setCurrency] = React.useState<Currency>("EUR");
  const [categoryId, setCategoryId] = React.useState<Tag["id"]>(ALL_CATEGORIES);
  const [studioId, setStudioId] = React.useState<Studio["id"] | null>(null);
  const [page, setPage] = React.useState<number>(1);

  // Calculate available based on current category and currency
  const availableStudios = React.useMemo(() => {
    return getAvailableStudios(games, studios, categoryId, currency);
  }, [games, studios, categoryId, currency]);

  // Reset studio filter if current studio is not in available studios
  React.useEffect(() => {
    if (studioId) {
      const isStudioAvailable = availableStudios.some(
        (s) => s.id.toString() === studioId.toString()
      );
      if (!isStudioAvailable) {
        setStudioId(null);
      }
    }
  }, [availableStudios, studioId]);

  // Reset page to 1 when any filter changes
  React.useEffect(() => {
    setPage(1);
  }, [currency, categoryId, studioId]);

  // Load more games (increase page count)
  const loadMore = React.useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  // Calculate filtered games (all games that match filters)
  const allFilteredGames = React.useMemo(() => {
    return filterGames(games, studios, currency, categoryId, studioId);
  }, [games, studios, currency, categoryId, studioId]);

  // Calculate paginated games (only show up to current page)
  const paginatedGames = React.useMemo(() => {
    return allFilteredGames.slice(0, page * GAMES_PER_PAGE);
  }, [allFilteredGames, page]);

  const hasMore = paginatedGames.length < allFilteredGames.length;

  return {
    currency,
    setCurrency,
    categoryId,
    setCategoryId,
    studioId,
    setStudioId,
    filteredGames: paginatedGames,
    availableStudios,
    totalGameCount: allFilteredGames.length,
    displayedGameCount: paginatedGames.length,
    hasMore,
    loadMore,
  };
}
