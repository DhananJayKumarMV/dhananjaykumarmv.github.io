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

  // Updated anime data based on user's preferences
  const animeList: Anime[] = [
    // Currently Watching
    { id: 1, title: "The Water Magician", rating: 8.5, status: "watching", genre: ["Fantasy", "Magic"], image: "💧", description: "A powerful magician's journey through water magic mastery." },
    { id: 2, title: "Dan da dan", rating: 8.8, status: "watching", genre: ["Supernatural", "Comedy"], image: "👻", description: "Occult and alien encounters with supernatural comedy." },
    { id: 3, title: "Dr Stone", rating: 9.1, status: "watching", genre: ["Sci-Fi", "Adventure"], image: "🧪", description: "Rebuilding civilization with the power of science." },
    { id: 4, title: "I Was Reincarnated as the 7th Prince", rating: 8.3, status: "watching", genre: ["Fantasy", "Isekai"], image: "👑", description: "A prince perfecting magical abilities in another world." },
    { id: 5, title: "The Rising of the Shield Hero", rating: 8.9, status: "watching", genre: ["Isekai", "Adventure"], image: "🛡️", description: "A hero's journey with only a shield as his weapon." },
    { id: 6, title: "Sakamoto Days", rating: 8.7, status: "watching", genre: ["Action", "Comedy"], image: "🔫", description: "A retired assassin's daily life adventures." },
    { id: 7, title: "One Piece", rating: 9.8, status: "watching", genre: ["Adventure", "Shounen"], image: "👒", description: "Epic pirate adventure to find the ultimate treasure." },
    { id: 8, title: "Gachiakuta", rating: 8.4, status: "watching", genre: ["Action", "Fantasy"], image: "⚙️", description: "A world where trash becomes power." },
    { id: 9, title: "To be Hero X", rating: 8.2, status: "watching", genre: ["Comedy", "Superhero"], image: "🦸", description: "Unconventional superhero adventures." },
    { id: 10, title: "Kaiju No 8", rating: 8.9, status: "watching", genre: ["Action", "Military"], image: "🦖", description: "Humanity's fight against giant monsters." },
    { id: 11, title: "Chainsaw Man", rating: 9.3, status: "watching", genre: ["Action", "Supernatural"], image: "🪚", description: "Devilish powers in a dark modern world." },
    
    // Completed
    { id: 12, title: "Attack on Titan", rating: 9.7, status: "completed", genre: ["Action", "Drama"], image: "🗡️", description: "Humanity's fight for survival against titans." },
    { id: 13, title: "Death Note", rating: 9.5, status: "completed", genre: ["Psychological", "Thriller"], image: "📓", description: "A supernatural notebook that kills anyone whose name is written in it." },
    { id: 14, title: "Solo Leveling", rating: 9.4, status: "completed", genre: ["Action", "Fantasy"], image: "⚔️", description: "A weak hunter becomes the world's strongest." },
    { id: 15, title: "Bleach", rating: 9.0, status: "completed", genre: ["Action", "Supernatural"], image: "👻", description: "Soul reaper's battle against evil spirits." },
    { id: 16, title: "Full Metal Alchemist", rating: 9.8, status: "completed", genre: ["Adventure", "Military"], image: "⚗️", description: "Brothers' quest for the philosopher's stone." },
    { id: 17, title: "My Hero Academia", rating: 9.2, status: "completed", genre: ["Superhero", "School"], image: "💪", description: "A world where everyone has superpowers." },
    { id: 18, title: "Sword Art Online", rating: 8.6, status: "completed", genre: ["Virtual Reality", "Romance"], image: "🎮", description: "Trapped in a virtual MMORPG world." },
    { id: 19, title: "Shangri-La Frontier", rating: 8.8, status: "completed", genre: ["Gaming", "Adventure"], image: "🎯", description: "Professional gamer tackles a legendary VRMMO." },
    { id: 20, title: "Demon Lord 2099", rating: 8.3, status: "completed", genre: ["Sci-Fi", "Fantasy"], image: "👹", description: "Demon lord awakens in a futuristic world." },
    { id: 21, title: "Blue Lock", rating: 9.1, status: "completed", genre: ["Sports", "Drama"], image: "⚽", description: "Elite soccer training program to find Japan's best striker." },
    { id: 22, title: "My Star", rating: 8.7, status: "completed", genre: ["Romance", "Drama"], image: "⭐", description: "Entertainment industry romance and ambitions." },
    { id: 23, title: "Tsukimichi-Moonlight Fantasy", rating: 8.5, status: "completed", genre: ["Isekai", "Fantasy"], image: "🌙", description: "Transported to another world by a moon goddess." },
    { id: 24, title: "Re:Monster", rating: 8.2, status: "completed", genre: ["Isekai", "Action"], image: "👹", description: "Reincarnated as a goblin with special abilities." },
    { id: 25, title: "Jujutsu Kaisen", rating: 9.3, status: "completed", genre: ["Supernatural", "Action"], image: "👊", description: "Students fighting cursed spirits with jujutsu sorcery." },
    { id: 26, title: "Demon Slayer", rating: 9.6, status: "completed", genre: ["Action", "Historical"], image: "🌸", description: "A boy's quest to save his demon sister." },
    { id: 27, title: "Black Clover", rating: 8.9, status: "completed", genre: ["Magic", "Adventure"], image: "🍀", description: "A magic-less boy aims to become the Wizard King." }
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
              <div className="text-3xl font-bold text-green-400">16</div>
              <div className="text-muted-foreground">Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-400">11</div>
              <div className="text-muted-foreground">Currently Watching</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-400">∞</div>
              <div className="text-muted-foreground">Plan to Watch</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimeShowcase;