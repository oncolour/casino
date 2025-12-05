import Image from "next/image";
import { Game } from "@/lib/types";
import { Studio } from "@/lib/types";

import { normalizeSrc } from "@/lib/utils";

interface GameCardProps {
  // Define any props needed for the GameCard component
  game: Game;
  studio: Studio;
}

export default function GameCard({ game, studio }: GameCardProps) {
  const { name, imageUrl } = game;

  if (!imageUrl) {
    return null;
  }

  const normalizedImageUrl = normalizeSrc(imageUrl);

  return (
    <article className="group overflow-hidden rounded-lg relative cursor-pointer shadow-md">
      <figure className="aspect-[4/3] bg-brandDark">
        <Image
          src={normalizedImageUrl}
          className="object-cover w-full h-full"
          alt={""}
          width={300}
          height={300}
          loading="lazy"
          unoptimized={true}
        />
      </figure>
      <div className="absolute opacity-0 transition-all ease-in-out duration-300 bottom-0 inset-x-0 bg-surfaceSecondary/80 text-white text-xs px-4 py-4 transform translate-y-1 group-hover:opacity-100 group-hover:translate-y-0">
        <h3 className="font-semibold text-xl">{name}</h3>
        <h4 className="text-gray-400">By {studio.name}</h4>
      </div>
    </article>
  );
}
