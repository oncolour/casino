"use client";

import React from "react";
import { useLobbyData } from "@/hooks/useLobbyData";
import { useGameFilters } from "@/hooks/useGameFilters";
import { Currency, Game, Studio, Tag } from "@/lib/types";

export interface LobbyContextType {
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
  loading: boolean;
  error: string | null;
  tags: Tag[];
}

export const LobbyContext = React.createContext<LobbyContextType | undefined>(
  undefined
);

interface LobbyProviderProps {
  children: React.ReactNode;
}

export function LobbyProvider({ children }: LobbyProviderProps) {
  const { games, studios, tags, loading, error } = useLobbyData();
  const {
    currency,
    setCurrency,
    categoryId,
    setCategoryId,
    studioId,
    setStudioId,
    filteredGames,
    availableStudios,
    totalGameCount,
    displayedGameCount,
    hasMore,
    loadMore,
  } = useGameFilters(games, studios);

  const contextValue: LobbyContextType = {
    currency,
    setCurrency,
    categoryId,
    setCategoryId,
    studioId,
    setStudioId,
    filteredGames,
    availableStudios,
    totalGameCount,
    displayedGameCount,
    hasMore,
    loadMore,
    loading,
    error,
    tags,
  };

  return (
    <LobbyContext.Provider value={contextValue}>
      {children}
    </LobbyContext.Provider>
  );
}
