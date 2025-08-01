import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Copy, ExternalLink, Twitter, MessageCircle, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import laPooPooImage from "@assets/generated_images/Clean_LaPooPoo_rabbit_mascot_b567ec8a.png";

export default function Home() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [copiedAddress, setCopiedAddress] = useState(false);

  const contractAddress = "0x1234567890abcdef1234567890abcdef12345678";

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedAddress(true);
      toast({
        title: "Copied!",
        description: "Contract address copied to clipboard",
      });
      setTimeout(() => setCopiedAddress(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the address manually",
        variant: "destructive",
      });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast({
      title: "Subscribed!",
      description: "You'll receive updates about LaPooPoo token",
    });
    setEmail("");
  };

  const tokenStats = {
    holders: "12,500+",
    marketCap: "$2.5M",
    burned: "15%",
    liquidity: "Locked"
  };

  const socialStats = {
    telegram: "25,000+ Members",
    twitter: "18,000+ Followers",
    discord: "12,000+ Members"
  };

  const roadmapItems = [
    {
      phase: 1,
      title: "Launch 🚀",
      description: "Token launch, initial liquidity, community building, and social media presence.",
      status: "completed",
      icon: "✅"
    },
    {
      phase: 2,
      title: "Community Growth 📈",
      description: "Marketing campaigns, influencer partnerships, exchange listings, and community events.",
      status: "progress",
      icon: "🔥"
    },
    {
      phase: 3,
      title: "Utility & NFTs 🎨",
      description: "LaPooPoo NFT collection, staking rewards, and utility development.",
      status: "upcoming",
      icon: "🌟"
    },
    {
      phase: 4,
      title: "To the Moon! 🌙",
      description: "Major exchange listings, partnerships, and global expansion.",
      status: "future",
      icon: "🌙"
    }
  ];

  const tokenomicsBreakdown = [
    { label: "🔥 Marketing & Development", percentage: "40%" },
    { label: "💧 Liquidity Pool", percentage: "30%" },
    { label: "🎁 Community Rewards", percentage: "20%" },
    { label: "👑 Team (Locked)", percentage: "10%" }
  ];

  // Floating particles animation - matching original image elements
  const FloatingParticles = ({ density = 12, showRadials = false }) => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(density)].map((_, i) => {
        // Elements from the original image: poop emojis, plus signs, and radiating lines
        const elements = showRadials 
          ? ['💩', '+', '✦', '—', '|', '\\', '/'] 
          : ['💩', '+', '✦'];
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        
        // Different styling for different elements
        const isLine = ['—', '|', '\\', '/'].includes(randomElement);
        const isPlus = randomElement === '+' || randomElement === '✦';
        
        return (
          <div
            key={i}
            className={`absolute animate-float opacity-40 hover:opacity-60 transition-opacity ${
              isLine ? 'text-amber-600 text-sm font-bold' :
              isPlus ? 'text-amber-500 text-lg font-bold' :
              'text-xl md:text-2xl'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.3))',
              transform: isLine ? `rotate(${Math.random() * 360}deg)` : 'none'
            }}
          >
            {randomElement}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">💩</span>
              </div>
              <span className="font-orbitron text-xl gradient-text">LaPooPoo</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
              <a href="#tokenomics" className="hover:text-yellow-400 transition-colors">Tokenomics</a>
              <a href="#roadmap" className="hover:text-yellow-400 transition-colors">Roadmap</a>
              <a href="#community" className="hover:text-yellow-400 transition-colors">Community</a>
            </div>
            <Button className="gradient-bg text-black font-semibold hover:scale-105 transition-transform animate-glow">
              Get Sh*t
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center particle-bg relative pt-16">
        <FloatingParticles density={15} showRadials={true} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <h1 className="font-orbitron text-5xl md:text-6xl lg:text-7xl gradient-text font-black">
                LaPooPoo
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-red-400 mb-2">
                Your meme coin ain't sh*t...
              </p>
              <p className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
                But ours IS! 💩
              </p>
              <p className="text-lg text-gray-300 max-w-xl">
                Tired of boring meme coins that promise the moon but deliver garbage? LaPooPoo doesn't pretend to be anything else - we're straight-up sh*t, and we're proud of it! Join the revolution of honest meme coins.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="gradient-bg text-black font-bold text-lg hover:scale-110 transition-transform animate-bounce-slow">
                  💩 Get Some Sh*t Now!
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-black">
                  📈 See Our Sh*tty Chart
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6 justify-center lg:justify-start">
                <Button size="icon" className="bg-blue-500 hover:bg-blue-600 hover:scale-110 transition-transform">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button size="icon" className="bg-blue-600 hover:bg-blue-700 hover:scale-110 transition-transform">
                  <MessageCircle className="h-5 w-5" />
                </Button>
                <Button size="icon" className="bg-indigo-600 hover:bg-indigo-700 hover:scale-110 transition-transform">
                  <Users className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Right Content - Mascot */}
            <div className="lg:w-1/2">
              <div className="relative animate-float">
                <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] mx-auto relative">
                  <img 
                    src={laPooPooImage} 
                    alt="LaPooPoo Mascot - Brown bunny with star eyes and big smile surrounded by poop emojis" 
                    className="w-full h-full object-contain rounded-full animate-glow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Stats Section */}
      <section className="py-12 bg-black relative">
        <FloatingParticles density={6} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(tokenStats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{value}</div>
                <div className="text-gray-400 mt-2 capitalize">{key === 'marketCap' ? 'Market Cap' : key}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-16 bg-gray-900 relative">
        <FloatingParticles density={8} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-orbitron text-center gradient-text mb-12">Tokenomics</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Tokenomics Chart */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full flex items-center justify-center">
                <div className="w-60 h-60 bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">1B</div>
                    <div className="text-gray-400">Total Supply</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tokenomics Breakdown */}
            <div className="space-y-6">
              {tokenomicsBreakdown.map((item, index) => (
                <Card key={index} className="bg-black border border-orange-500/20">
                  <CardContent className="p-4 flex justify-between items-center">
                    <span className="font-semibold">{item.label}</span>
                    <span className="gradient-text font-bold">{item.percentage}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contract Address */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Contract Address</h3>
            <Card className="bg-black border border-orange-500/20 max-w-2xl mx-auto">
              <CardContent className="p-4 flex items-center gap-4">
                <code className="text-yellow-400 break-all flex-1 text-sm">{contractAddress}</code>
                <Button
                  size="sm"
                  onClick={() => copyToClipboard(contractAddress)}
                  className="gradient-bg text-black font-bold hover:scale-105 transition-transform"
                >
                  {copiedAddress ? "Copied!" : <Copy className="h-4 w-4" />}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-16 bg-black particle-bg relative">
        <FloatingParticles density={10} showRadials={true} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-orbitron text-center gradient-text mb-12">Roadmap to the Moon! 🚀</h2>
          
          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.status === 'completed' ? 'bg-green-500' :
                  item.status === 'progress' ? 'bg-orange-500 animate-pulse-fast' :
                  'bg-gray-600'
                }`}>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold gradient-text mb-2">Phase {item.phase}: {item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                  <Badge 
                    className={`mt-2 ${
                      item.status === 'completed' ? 'bg-green-500' :
                      item.status === 'progress' ? 'bg-orange-500' :
                      'bg-gray-600'
                    }`}
                  >
                    {item.status === 'completed' ? 'COMPLETED' :
                     item.status === 'progress' ? 'IN PROGRESS' :
                     item.status === 'upcoming' ? 'UPCOMING' : 'FUTURE'}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-16 bg-gray-900 relative">
        <FloatingParticles density={7} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-orbitron gradient-text mb-8">Join the Sh*t Army!</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Ready to be part of the most honest crypto community? No BS, no false promises - just pure, unadulterated sh*t content and memes that'll make you laugh while your portfolio goes to the moon!
          </p>

          {/* Social Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {Object.entries(socialStats).map(([platform, stats]) => (
              <Card key={platform} className="bg-black border border-orange-500/20 hover:border-orange-500/40 transition-colors">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">
                    {platform === 'telegram' ? '📱' : platform === 'twitter' ? '🐦' : '💬'}
                  </div>
                  <h3 className="text-2xl font-bold gradient-text mb-2 capitalize">{platform}</h3>
                  <p className="text-gray-400 mb-4">{stats}</p>
                  <Button className="gradient-bg text-black font-semibold hover:scale-105 transition-transform">
                    {platform === 'telegram' ? 'Join Now' : platform === 'twitter' ? 'Follow' : 'Join Server'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <Card className="bg-black border border-orange-500/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold gradient-text mb-4">Stay Updated!</h3>
              <p className="text-gray-400 mb-6">Get the latest LaPooPoo news and exclusive offers directly in your inbox.</p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-gray-800 border-gray-600 focus:border-orange-500"
                  required
                />
                <Button type="submit" className="gradient-bg text-black font-semibold hover:scale-105 transition-transform">
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-center relative">
        <FloatingParticles density={8} showRadials={true} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-orbitron gradient-text mb-6">Ready for Some Real Sh*t?</h2>
          <p className="text-lg text-gray-300 mb-10">
            Stop wasting time with fake-ass meme coins that overpromise and underdeliver. LaPooPoo is the only honest sh*t in crypto - and that's exactly why we're going to the moon!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="gradient-bg text-black font-bold text-xl hover:scale-110 transition-transform animate-bounce-slow">
              💩 Get Your Sh*t Now!
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-black">
              🔥 Join the Chaos
            </Button>
          </div>

          {/* Disclaimer */}
          <div className="mt-16 text-sm text-gray-500 max-w-2xl mx-auto">
            <p>⚠️ Disclaimer: LaPooPoo is a meme token created for entertainment purposes. Cryptocurrency investments carry risk. Please do your own research and invest responsibly.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">💩</span>
              </div>
              <span className="font-fredoka text-2xl gradient-text">LaPooPoo</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Support</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; 2024 LaPooPoo Token. All rights reserved. Made with 💩 and ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
