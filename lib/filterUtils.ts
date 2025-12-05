"use client";

import { Game, Studio, Currency, ALL_CATEGORIES, Tag } from "@/lib/types";

/**
 * Filters games based on currency, category, and studio
 */
export function filterGames(
  games: Game[],
  studios: Studio[],
  currency: Currency,
  categoryId: Tag["id"],
  studioId: Studio["id"] | null
): Game[] {
  if (!games || !studios) return [];

  return games.filter((game) => {
    // Find the studio for this game
    const studio = studios.find((s) => s.id === game.studioId);
    if (!studio) return false;

    // Filter by currency - exclude if studio blocks this currency
    if (
      studio.blockedCurrencies &&
      studio.blockedCurrencies.split(",").includes(currency)
    ) {
      return false;
    }

    // Filter by category/tag
    if (categoryId !== ALL_CATEGORIES) {
      if (!game.gameTags.includes(categoryId)) {
        return false;
      }
    }

    // Filter by studio
    if (studioId && studioId !== game.studioId.toString()) {
      return false;
    }

    return true;
  });
}

/**
 * Gets available studios based on the selected category
 * Only returns studios that have games matching the category and currency
 */
export function getAvailableStudios(
  games: Game[],
  studios: Studio[],
  categoryId: Tag["id"],
  currency: Currency
): Studio[] {
  if (!games || !studios) return [];

  // Get all valid game IDs that match the category and currency
  const validGameStudioIds = new Set(
    games
      .filter((game) => {
        // Check currency
        const studio = studios.find((s) => s.id === game.studioId);
        if (
          !studio ||
          studio.blockedCurrencies?.split(",").includes(currency)
        ) {
          return false;
        }

        // Check category
        if (categoryId === ALL_CATEGORIES) return true;
        return game.gameTags.includes(categoryId);
      })
      .map((game) => game.studioId)
  );

  // Return studios that have valid games
  return studios
    .filter((studio) => validGameStudioIds.has(studio.id))
    .sort((a, b) => a.name.localeCompare(b.name));
}
