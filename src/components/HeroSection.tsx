import { Search } from 'lucide-react';

const HeroSection = () => {
  const trendingTopics = [
    'Philosophy',
    'History',
    'Literature',
    'Science',
    'Art & Culture',
    'Politics',
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 parchment-texture">
      <div className="w-full max-w-3xl mx-auto text-center">
        {/* Decorative Element */}
        <div className="mb-8 opacity-60">
          <span className="text-4xl font-serif text-primary">❧</span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-ink mb-6 animate-fade-in">
          Discover Timeless Wisdom
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Explore curated articles from the world's greatest minds, past and present.
        </p>

        {/* Search Bar */}
        <div 
          className="relative w-full max-w-2xl mx-auto mb-12 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search for articles, topics, or authors..."
              className="w-full py-4 px-6 pr-14 bg-card text-foreground placeholder:text-muted-foreground rounded-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-base"
            />
            <button 
              className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors duration-200"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Trending Topics */}
        <div 
          className="animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <p className="text-sm text-muted-foreground mb-4 uppercase tracking-widest">
            Trending Topics
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {trendingTopics.map((topic, index) => (
              <a
                key={topic}
                href={`#${topic.toLowerCase().replace(' & ', '-')}`}
                className="text-sm md:text-base text-foreground/70 hover:text-primary transition-colors duration-200 hover-lift"
              >
                {topic}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-slow" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
