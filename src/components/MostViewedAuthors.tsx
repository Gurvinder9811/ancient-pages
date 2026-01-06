import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';

interface TrendingArticle {
  id: number;
  title: string;
  views: string;
  category: string;
}

interface Author {
  id: number;
  name: string;
  specialty: string;
  articles: number;
  avatar: string;
}

const trendingArticles: TrendingArticle[] = [
  { id: 1, title: "The Philosophy of Slow Living", views: "24.5K", category: "Philosophy" },
  { id: 2, title: "Rediscovering the Classics", views: "18.2K", category: "Literature" },
  { id: 3, title: "Byzantine Art: A Hidden Legacy", views: "15.8K", category: "Art" },
  { id: 4, title: "The Science of Ancient Astronomy", views: "14.1K", category: "Science" },
  { id: 5, title: "Medieval Economics Explained", views: "12.3K", category: "History" },
];

const topAuthors: Author[] = [
  {
    id: 1,
    name: "Dr. Eleanor Vance",
    specialty: "Philosophy & Ethics",
    articles: 47,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Prof. Marcus Webb",
    specialty: "Ancient History",
    articles: 38,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Isabella Romano",
    specialty: "Renaissance Art",
    articles: 32,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Dr. Sarah Chen",
    specialty: "History of Science",
    articles: 28,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
  },
];

const MostViewedAuthors = () => {
  return (
    <section id="authors" className="section-padding px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Most Viewed Articles */}
          <div>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp size={20} className="text-primary" />
                <span className="text-sm uppercase tracking-widest text-muted-foreground">
                  Most Viewed
                </span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-ink">
                Popular This Week
              </h2>
            </div>

            <div className="space-y-0">
              {trendingArticles.map((article, index) => (
                <a
                  key={article.id}
                  href={`#article-${article.id}`}
                  className="flex items-start gap-5 py-5 border-b border-border/50 group cursor-pointer hover:bg-background/50 transition-colors duration-200 -mx-4 px-4 rounded-sm"
                >
                  <span className="font-serif text-3xl text-muted-foreground/40 font-medium w-8 flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-lg font-medium text-ink group-hover:text-primary transition-colors duration-200 mb-1 leading-snug">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{article.category}</span>
                      <span>·</span>
                      <span>{article.views} views</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Top Authors */}
          <div>
            <div className="mb-10">
              <span className="text-sm uppercase tracking-widest text-muted-foreground block mb-3">
                Featured Contributors
              </span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-ink">
                Top Authors
              </h2>
            </div>

            <div className="space-y-6">
              {topAuthors.map((author) => (
                <Link
                  key={author.id}
                  to={`/author/${author.id}`}
                  className="flex items-center gap-5 p-4 -mx-4 rounded-sm cursor-pointer hover:bg-parchment-dark/30 transition-colors duration-200 group"
                >
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-border group-hover:border-primary transition-colors duration-200"
                  />
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-medium text-ink group-hover:text-primary transition-colors duration-200">
                      {author.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {author.specialty}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {author.articles} articles published
                    </p>
                  </div>
                  <span className="px-4 py-2 border border-primary text-primary text-sm font-medium rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-primary hover:text-primary-foreground">
                    View Profile
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostViewedAuthors;
