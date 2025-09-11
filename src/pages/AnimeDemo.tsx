import AnimeHero from "@/components/AnimeHero";
import AnimeFavorites from "@/components/AnimeFavorites";
import AnimeShowcase from "@/components/AnimeShowcase";

const AnimeDemo = () => {
  return (
    <div className="min-h-screen">
      <AnimeHero />
      <AnimeFavorites />
      <AnimeShowcase />
    </div>
  );
};

export default AnimeDemo;