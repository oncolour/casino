"use client";

import { useLobby } from "@/hooks/useLobby";
import { ALL_CATEGORIES } from "@/lib/types";
import { clsx } from "clsx";

export default function CategoryFilter() {
  const { categoryId, setCategoryId, tags } = useLobby();

  const btnClasses =
    "focus:outline-none px-4 py-2 rounded-lg font-medium transition-colors border-brandPrimary border-2 border-brandPrimary flex items-center gap-2";
  const buttonActiveClass =
    "bg-brandPrimary text-white font-semibold hover:bg-brandPrimary/50";
  const buttonInactiveClass =
    "bg-transparent text-gray-200  hover:bg-brandPrimary focus:ring-2 focus:ring-brandLight";

  return (
    <div>
      <label className="block text-sm font-medium sr-only">Category</label>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setCategoryId(ALL_CATEGORIES)}
          className={clsx(btnClasses, {
            [buttonActiveClass]: categoryId === ALL_CATEGORIES,
            [buttonInactiveClass]: categoryId !== ALL_CATEGORIES,
          })}
        >
          <span>🎲</span> <span>All Games</span>{" "}
          {categoryId === ALL_CATEGORIES && <GameCount />}
        </button>

        {tags.map((tag) => (
          <button
            key={tag.id}
            onClick={() => setCategoryId(tag.id)}
            className={clsx(btnClasses, {
              [buttonActiveClass]: categoryId === tag.id,
              [buttonInactiveClass]: categoryId !== tag.id,
            })}
          >
            <span>{tag.name}</span> {categoryId === tag.id && <GameCount />}
          </button>
        ))}
      </div>
    </div>
  );
}

const GameCount = () => {
  const { totalGameCount } = useLobby();

  return (
    <span className="inline-block text-sm bg-brandLight py-0.5 px-2 rounded-full">
      {totalGameCount}
    </span>
  );
};
