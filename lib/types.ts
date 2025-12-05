export interface Game {
  id: string;
  name: string;
  imageUrl: string;
  studioId: string;
  gameTags: string[];
}

export interface Studio {
  id: string;
  name: string;
  blockedCurrencies: string;
}

export interface Tag {
  id: string;
  name: string;
}

export interface LobbyData {
  games: Game[];
  studios: Studio[];
  tags: Tag[];
}

export type Currency = "EUR" | "USD" | "mBTC";

export const CURRENCIES: Currency[] = ["EUR", "USD", "mBTC"];

export const ALL_CATEGORIES = "ALL";
