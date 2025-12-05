/* Components */
import Header from "@/components/layout/Header";

/* Types */
import Footer from "@/components/layout/Footer";
import GameGrid from "@/components/games/GameGrid";
import FilterBar from "@/components//filters/FilterBar";

export default function CasinoLobby() {
  return (
    <>
      <Header />
      <div className="min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FilterBar />
          <GameGrid />
        </div>
      </div>
      <Footer />
    </>
  );
}
