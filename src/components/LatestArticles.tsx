import { ArrowRight } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "The Art of Contemplation in a Digital Age",
    excerpt: "How ancient philosophical practices can guide us through modern distractions and help us find clarity in chaos.",
    category: "Philosophy",
    author: "Dr. Eleanor Vance",
    date: "Dec 28, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Lost Libraries of the Ancient World",
    excerpt: "Exploring the legendary collections of Alexandria, Pergamum, and the hidden archives that shaped human knowledge.",
    category: "History",
    author: "Prof. Marcus Webb",
    date: "Dec 25, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    title: "The Poetry of Mathematics",
    excerpt: "Discovering the hidden beauty and elegance within numerical patterns that have fascinated scholars for millennia.",
    category: "Science",
    author: "Dr. Sarah Chen",
    date: "Dec 22, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Renaissance Masters and Their Secrets",
    excerpt: "Unveiling the techniques and philosophies behind the most celebrated artworks of the Italian Renaissance.",
    category: "Art & Culture",
    author: "Isabella Romano",
    date: "Dec 19, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=600&h=400&fit=crop"
  },
  {
    id: 5,
    title: "The Stoic's Guide to Modern Leadership",
    excerpt: "Applying the wisdom of Marcus Aurelius and Seneca to contemporary challenges in business and governance.",
    category: "Philosophy",
    author: "James Hartford",
    date: "Dec 16, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&h=400&fit=crop"
  },
  {
    id: 6,
    title: "Literary Giants: The Correspondence Archives",
    excerpt: "A journey through the private letters exchanged between the world's most influential writers and thinkers.",
    category: "Literature",
    author: "Emma Blackwood",
    date: "Dec 13, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop"
  },
];

const LatestArticles = () => {
  return (
    <section id="articles" className="section-padding px-6 lg:px-12">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-ink mb-4">
            Latest Articles
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fresh perspectives on timeless subjects, curated for the curious mind.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((article, index) => (
            <article 
              key={article.id} 
              className="group cursor-pointer hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-sm mb-5 aspect-[3/2]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-background/90 text-xs font-medium uppercase tracking-wider text-foreground rounded-sm">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-serif text-xl lg:text-2xl font-medium text-ink mb-3 group-hover:text-primary transition-colors duration-200 leading-tight">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">{article.author}</span>
                  <span>·</span>
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200"
          >
            View All Articles
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
