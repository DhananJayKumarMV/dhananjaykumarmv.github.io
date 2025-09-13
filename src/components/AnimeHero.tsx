import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Star } from "lucide-react";

const AnimeHero = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const animeQuotes = [
    {
      text: "The world is not perfect, but it's there for us trying the best it can. That's what makes it so damn beautiful.",
      anime: "Fullmetal Alchemist",
      character: "Roy Mustang"
    },
    {
      text: "Dreams don't have deadlines. I'll keep going until I reach them.",
      anime: "Naruto",
      character: "Uzumaki Naruto"
    },
    {
      text: "Whether you win or lose, looking back and learning from your experience is part of life.",
      anime: "Pokemon",
      character: "Ash Ketchum"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % animeQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        <div className="absolute top-[20%] left-[10%] animate-pulse">
          <Sparkles className="w-4 h-4 text-pink-300 opacity-60" />
        </div>
        <div className="absolute top-[70%] right-[15%] animate-pulse animation-delay-1000">
          <Star className="w-3 h-3 text-blue-300 opacity-40" />
        </div>
        <div className="absolute top-[40%] right-[20%] animate-pulse animation-delay-2000">
          <Heart className="w-5 h-5 text-purple-300 opacity-50" />
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-20 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full opacity-15 blur-3xl animate-pulse animation-delay-1000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                 backgroundSize: '60px 60px'
               }}>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Otaku
            </span>
            <br />
            <span className="text-white">
              Enthusiast
            </span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-xl text-purple-200 animate-fade-in animation-delay-500">
            <Sparkles className="w-6 h-6 animate-spin-slow" />
            <span>Where Code Meets Anime Magic</span>
            <Sparkles className="w-6 h-6 animate-spin-slow" />
          </div>
        </div>

        {/* Rotating Quote */}
        <div className="mb-12 bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 animate-fade-in animation-delay-1000">
          <blockquote className="text-xl md:text-2xl text-white font-light italic leading-relaxed mb-4">
            "{animeQuotes[currentQuote].text}"
          </blockquote>
          <div className="text-purple-200">
            <span className="font-medium">{animeQuotes[currentQuote].character}</span>
            <span className="mx-2">•</span>
            <span className="text-pink-300">{animeQuotes[currentQuote].anime}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in animation-delay-1500">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Explore My Anime World
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="border-purple-400 text-purple-300 hover:bg-purple-500/20 hover:border-purple-300 hover:scale-105 transition-all duration-300"
          >
            <Heart className="w-5 h-5 mr-2" />
            View Favorites
          </Button>
        </div>

        {/* Stats Preview */}
        <div className="mt-16 grid grid-cols-3 gap-8 animate-fade-in animation-delay-2000">
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">200+</div>
            <div className="text-purple-200 text-sm">Anime Watched</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-purple-200 text-sm">Dreams Coded</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
            <div className="text-purple-200 text-sm">Passion Level</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimeHero;