import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Star, PlayCircle, Sparkles } from "lucide-react";

interface Anime {
  id: number;
  title: string;
  rating: number;
  status: "watching" | "completed" | "plan-to-watch";
  genre: string[];
  image: string;
  description: string;
}

const AnimeShowcase = () => {
  const [selectedTab, setSelectedTab] = useState<"watching" | "completed" | "plan-to-watch">("watching");

  // Sample anime data - in real implementation, this could be from MyAnimeList API
  const animeList: Anime[] = [
    {
      id: 1,
      title: "Attack on Titan",
      rating: 9.5,
      status: "completed",
      genre: ["Action", "Drama", "Horror"],
      image: "🏰",
      description: "Humanity fights for survival against giant humanoid creatures."
    },
    {
      id: 2,
      title: "Your Name",
      rating: 9.8,
      status: "completed",
      genre: ["Romance", "Supernatural", "Drama"],
      image: "🌟",
      description: "A beautiful story of two teenagers connected by fate."
    },
    {
      id: 3,
      title: "Demon Slayer",
      rating: 9.2,
      status: "watching",
      genre: ["Action", "Historical", "Supernatural"],
      image: "⚔️",
      description: "A young boy becomes a demon slayer to save his sister."
    }
  ];

  const filteredAnime = animeList.filter(anime => anime.status === selectedTab);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "watching": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "completed": return "bg-green-500/20 text-green-300 border-green-500/30";
      case "plan-to-watch": return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      default: return "";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900/10 via-blue-900/5 to-pink-900/10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-pink-400 animate-pulse" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Anime Universe
            </h2>
            <Sparkles className="w-8 h-8 text-blue-400 animate-pulse animation-delay-1000" />
          </div>
          <p className="text-muted-foreground text-lg">
            Where storytelling meets imagination - my journey through anime worlds
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-background/50 backdrop-blur-sm rounded-full p-1 border border-border">
            {["watching", "completed", "plan-to-watch"].map((tab) => (
              <Button
                key={tab}
                variant={selectedTab === tab ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedTab(tab as any)}
                className={`rounded-full mx-1 transition-all duration-300 ${
                  selectedTab === tab 
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg" 
                    : "hover:bg-muted"
                }`}
              >
                {tab === "plan-to-watch" ? "Plan to Watch" : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Anime Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredAnime.map((anime, index) => (
            <Card 
              key={anime.id} 
              className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {anime.image}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {anime.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {anime.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Rating */}
                <div className="flex items-center justify-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold text-yellow-400">{anime.rating}</span>
                  <span className="text-muted-foreground">/10</span>
                </div>

                {/* Status Badge */}
                <div className="flex justify-center">
                  <Badge className={`${getStatusColor(anime.status)} border`}>
                    {anime.status.replace("-", " ")}
                  </Badge>
                </div>

                {/* Genres */}
                <div className="flex flex-wrap gap-1 justify-center">
                  {anime.genre.map((g, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {g}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex justify-center gap-2 pt-2">
                  <Button size="sm" variant="ghost" className="h-8">
                    <Heart className="w-3 h-3 mr-1" />
                    Like
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8">
                    <PlayCircle className="w-3 h-3 mr-1" />
                    Watch
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl p-8 text-center border border-primary/20">
          <h3 className="text-2xl font-bold mb-6 text-foreground">My Anime Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-pink-400">127</div>
              <div className="text-muted-foreground">Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-400">12</div>
              <div className="text-muted-foreground">Currently Watching</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-400">89</div>
              <div className="text-muted-foreground">Plan to Watch</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimeShowcase;