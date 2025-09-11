import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Trophy } from "lucide-react";

const AnimeFavorites = () => {
  const topAnime = [
    {
      rank: 1,
      title: "Spirited Away",
      director: "Hayao Miyazaki",
      year: "2001",
      genre: ["Adventure", "Family", "Supernatural"],
      rating: 10,
      color: "from-emerald-400 to-teal-600",
      icon: "🐉",
      reason: "A masterpiece that taught me that growing up doesn't mean losing your sense of wonder."
    },
    {
      rank: 2,
      title: "Attack on Titan",
      director: "Wit Studio",
      year: "2013",
      genre: ["Action", "Drama", "Military"],
      rating: 9.8,
      color: "from-red-400 to-orange-600",
      icon: "⚔️",
      reason: "Mind-blowing plot twists and philosophical questions about freedom and humanity."
    },
    {
      rank: 3,
      title: "Your Name",
      director: "Makoto Shinkai",
      year: "2016",
      genre: ["Romance", "Drama", "Supernatural"],
      rating: 9.7,
      color: "from-purple-400 to-pink-600",
      icon: "🌟",
      reason: "Beautiful animation and a love story that transcends time and space."
    },
    {
      rank: 4,
      title: "One Piece",
      director: "Toei Animation",
      year: "1999",
      genre: ["Adventure", "Comedy", "Shounen"],
      rating: 9.5,
      color: "from-blue-400 to-cyan-600",
      icon: "🏴‍☠️",
      reason: "An epic adventure about friendship, dreams, and never giving up."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Trophy className="w-10 h-10 text-yellow-400" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Hall of Fame
            </h2>
            <Trophy className="w-10 h-10 text-yellow-400" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            These anime have shaped my perspective, inspired my creativity, and reminded me why storytelling is the most powerful form of magic.
          </p>
        </div>

        {/* Top Anime Cards */}
        <div className="space-y-8">
          {topAnime.map((anime, index) => (
            <Card 
              key={anime.rank}
              className="group hover:scale-[1.02] transition-all duration-500 bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur border-slate-700 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  {/* Rank & Icon */}
                  <div className="flex flex-col items-center space-y-4 lg:min-w-[120px]">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${anime.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                      #{anime.rank}
                    </div>
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {anime.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {anime.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {anime.director} • {anime.year}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="font-semibold text-yellow-400">{anime.rating}</span>
                      </div>
                    </div>

                    {/* Genres */}
                    <div className="flex flex-wrap gap-2">
                      {anime.genre.map((genre, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-primary/30 text-primary/80">
                          {genre}
                        </Badge>
                      ))}
                    </div>

                    {/* Personal Note */}
                    <div className="bg-slate-800/30 rounded-lg p-4 border-l-4 border-primary/50">
                      <div className="flex items-start gap-3">
                        <Heart className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground italic leading-relaxed">
                          "{anime.reason}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-2xl p-8 border border-primary/20">
            <blockquote className="text-xl italic text-muted-foreground mb-4">
              "Anime isn't just entertainment—it's a lens through which we can explore the depths of human emotion, the power of perseverance, and the beauty of imagination."
            </blockquote>
            <div className="text-primary font-medium">— My Philosophy as an Anime Developer</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimeFavorites;