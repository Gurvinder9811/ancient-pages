import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter, X, Clock, TrendingUp, Eye, Calendar, Tag, User, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  views: number;
  trending: boolean;
}

const allArticles: Article[] = [
  {
    id: '1',
    slug: 'the-art-of-mindful-reading',
    title: 'The Art of Mindful Reading in the Digital Age',
    excerpt: 'Discover how ancient reading practices can transform your relationship with modern literature and enhance comprehension.',
    category: 'Philosophy',
    author: { id: '1', name: 'Eleanor Whitmore', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
    date: 'December 15, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=400&fit=crop',
    tags: ['mindfulness', 'reading', 'digital-age'],
    views: 15420,
    trending: true
  },
  {
    id: '2',
    slug: 'classical-architecture-influence',
    title: 'How Classical Architecture Influences Modern Design',
    excerpt: 'Exploring the timeless principles of Greek and Roman architecture that continue to shape our cities today.',
    category: 'Architecture',
    author: { id: '2', name: 'Marcus Chen', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' },
    date: 'December 12, 2024',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?w=600&h=400&fit=crop',
    tags: ['architecture', 'design', 'history'],
    views: 12350,
    trending: true
  },
  {
    id: '3',
    slug: 'lost-libraries-of-antiquity',
    title: 'The Lost Libraries of Antiquity',
    excerpt: 'A journey through the greatest repositories of knowledge that the ancient world ever knew.',
    category: 'History',
    author: { id: '3', name: 'Dr. Sarah Mitchell', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
    date: 'December 10, 2024',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
    tags: ['libraries', 'ancient-world', 'knowledge'],
    views: 18920,
    trending: false
  },
  {
    id: '4',
    slug: 'renaissance-art-techniques',
    title: 'Renaissance Art Techniques Still Used Today',
    excerpt: 'From sfumato to chiaroscuro, discover the timeless techniques that master artists perfected centuries ago.',
    category: 'Art',
    author: { id: '1', name: 'Eleanor Whitmore', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
    date: 'December 8, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    tags: ['art', 'renaissance', 'techniques'],
    views: 9870,
    trending: false
  },
  {
    id: '5',
    slug: 'stoic-philosophy-modern-life',
    title: 'Applying Stoic Philosophy to Modern Life',
    excerpt: 'How the wisdom of Marcus Aurelius and Seneca can help you navigate contemporary challenges.',
    category: 'Philosophy',
    author: { id: '4', name: 'James Thornton', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
    date: 'December 5, 2024',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&h=400&fit=crop',
    tags: ['stoicism', 'philosophy', 'self-improvement'],
    views: 22150,
    trending: true
  },
  {
    id: '6',
    slug: 'medieval-manuscript-preservation',
    title: 'The Art of Medieval Manuscript Preservation',
    excerpt: 'Understanding the delicate science behind preserving centuries-old texts for future generations.',
    category: 'History',
    author: { id: '3', name: 'Dr. Sarah Mitchell', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
    date: 'December 3, 2024',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop',
    tags: ['manuscripts', 'preservation', 'medieval'],
    views: 7650,
    trending: false
  },
  {
    id: '7',
    slug: 'poetry-across-cultures',
    title: 'Poetry Across Cultures: Universal Themes',
    excerpt: 'Exploring how different civilizations have expressed love, loss, and hope through verse.',
    category: 'Literature',
    author: { id: '2', name: 'Marcus Chen', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' },
    date: 'November 30, 2024',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop',
    tags: ['poetry', 'culture', 'literature'],
    views: 11230,
    trending: false
  },
  {
    id: '8',
    slug: 'botanical-illustrations-history',
    title: 'The Golden Age of Botanical Illustrations',
    excerpt: 'When science met art: the beautiful legacy of botanical artists and their contributions to knowledge.',
    category: 'Art',
    author: { id: '1', name: 'Eleanor Whitmore', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
    date: 'November 28, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&h=400&fit=crop',
    tags: ['botanical', 'illustrations', 'science'],
    views: 8940,
    trending: false
  },
  {
    id: '9',
    slug: 'ancient-navigation-techniques',
    title: 'How Ancient Sailors Navigated the Seas',
    excerpt: 'From star charts to primitive compasses, discover the ingenious methods of early maritime explorers.',
    category: 'History',
    author: { id: '4', name: 'James Thornton', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
    date: 'November 25, 2024',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&h=400&fit=crop',
    tags: ['navigation', 'maritime', 'exploration'],
    views: 16780,
    trending: true
  },
  {
    id: '10',
    slug: 'calligraphy-meditation',
    title: 'Calligraphy as a Form of Meditation',
    excerpt: 'The mindful practice of beautiful writing and its benefits for mental clarity and focus.',
    category: 'Philosophy',
    author: { id: '2', name: 'Marcus Chen', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' },
    date: 'November 22, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop',
    tags: ['calligraphy', 'meditation', 'mindfulness'],
    views: 13450,
    trending: false
  }
];

const categories = ['All', 'Philosophy', 'History', 'Art', 'Literature', 'Architecture'];
const allTags = ['mindfulness', 'reading', 'digital-age', 'architecture', 'design', 'history', 'libraries', 'ancient-world', 'knowledge', 'art', 'renaissance', 'techniques', 'stoicism', 'philosophy', 'self-improvement', 'manuscripts', 'preservation', 'medieval', 'poetry', 'culture', 'literature', 'botanical', 'illustrations', 'science', 'navigation', 'maritime', 'exploration', 'calligraphy', 'meditation'];
const authors = [
  { id: '1', name: 'Eleanor Whitmore' },
  { id: '2', name: 'Marcus Chen' },
  { id: '3', name: 'Dr. Sarah Mitchell' },
  { id: '4', name: 'James Thornton' }
];

type SortOption = 'latest' | 'trending' | 'most-viewed';

const ArticlesListing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedAuthor, setSelectedAuthor] = useState(searchParams.get('author') || '');
  const [selectedTags, setSelectedTags] = useState<string[]>(
    searchParams.get('tags')?.split(',').filter(Boolean) || []
  );
  const [sortBy, setSortBy] = useState<SortOption>((searchParams.get('sort') as SortOption) || 'latest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredArticles = useMemo(() => {
    let result = [...allArticles];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        article =>
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.author.name.toLowerCase().includes(query) ||
          article.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (selectedCategory && selectedCategory !== 'All') {
      result = result.filter(article => article.category === selectedCategory);
    }

    // Author filter
    if (selectedAuthor) {
      result = result.filter(article => article.author.id === selectedAuthor);
    }

    // Tags filter
    if (selectedTags.length > 0) {
      result = result.filter(article =>
        selectedTags.some(tag => article.tags.includes(tag))
      );
    }

    // Sorting
    switch (sortBy) {
      case 'trending':
        result = result.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
        break;
      case 'most-viewed':
        result = result.sort((a, b) => b.views - a.views);
        break;
      case 'latest':
      default:
        // Already sorted by date in the data
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, selectedAuthor, selectedTags, sortBy]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedAuthor('');
    setSelectedTags([]);
    setSortBy('latest');
    setSearchParams({});
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'All' || selectedAuthor || selectedTags.length > 0;

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-serif text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Authors */}
      <div>
        <h3 className="font-serif text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <User className="w-4 h-4" />
          Authors
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedAuthor('')}
            className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
              !selectedAuthor
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
            }`}
          >
            All Authors
          </button>
          {authors.map(author => (
            <button
              key={author.id}
              onClick={() => setSelectedAuthor(author.id)}
              className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                selectedAuthor === author.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              {author.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <h3 className="font-serif text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Tag className="w-4 h-4" />
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {allTags.slice(0, 15).map(tag => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? 'default' : 'secondary'}
              className={`cursor-pointer transition-colors ${
                selectedTags.includes(tag)
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-primary/10'
              }`}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button
          variant="outline"
          onClick={clearFilters}
          className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <X className="w-4 h-4 mr-2" />
          Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background parchment-texture">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Explore Our Collection
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-slow">
            Discover timeless wisdom, scholarly insights, and thought-provoking articles from our distinguished authors.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative animate-slide-up">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles, authors, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-6 text-lg bg-card border-border/50 focus:border-primary rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-border/30">
            <div className="flex items-center gap-4">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">{filteredArticles.length}</span> articles found
              </p>
              {hasActiveFilters && (
                <div className="flex flex-wrap gap-2">
                  {selectedCategory !== 'All' && (
                    <Badge variant="secondary" className="gap-1">
                      {selectedCategory}
                      <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCategory('All')} />
                    </Badge>
                  )}
                  {selectedAuthor && (
                    <Badge variant="secondary" className="gap-1">
                      {authors.find(a => a.id === selectedAuthor)?.name}
                      <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedAuthor('')} />
                    </Badge>
                  )}
                  {selectedTags.map(tag => (
                    <Badge key={tag} variant="secondary" className="gap-1">
                      {tag}
                      <X className="w-3 h-3 cursor-pointer" onClick={() => toggleTag(tag)} />
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-3">
              {/* Sort Dropdown */}
              <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
                <SelectTrigger className="w-[180px] bg-card">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Latest
                    </span>
                  </SelectItem>
                  <SelectItem value="trending">
                    <span className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" /> Trending
                    </span>
                  </SelectItem>
                  <SelectItem value="most-viewed">
                    <span className="flex items-center gap-2">
                      <Eye className="w-4 h-4" /> Most Viewed
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>

              {/* Mobile Filter Button */}
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 bg-background parchment-texture">
                  <SheetHeader>
                    <SheetTitle className="font-serif">Filter Articles</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterSidebar />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <FilterSidebar />
              </div>
            </aside>

            {/* Articles Grid */}
            <div className="flex-1">
              {filteredArticles.length > 0 ? (
                <div className="grid gap-8">
                  {filteredArticles.map((article, index) => (
                    <article
                      key={article.id}
                      className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex flex-col md:flex-row">
                        {/* Image */}
                        <Link
                          to={`/article/${article.slug}`}
                          className="md:w-72 lg:w-80 flex-shrink-0"
                        >
                          <div className="aspect-[16/10] md:aspect-auto md:h-full overflow-hidden">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </Link>

                        {/* Content */}
                        <div className="flex-1 p-6 flex flex-col">
                          <div className="flex items-center gap-3 mb-3">
                            <Link
                              to={`/articles?category=${article.category}`}
                              className="text-sm font-medium text-primary hover:underline"
                            >
                              {article.category}
                            </Link>
                            {article.trending && (
                              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                Trending
                              </Badge>
                            )}
                          </div>

                          <Link to={`/article/${article.slug}`}>
                            <h2 className="font-serif text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                              {article.title}
                            </h2>
                          </Link>

                          <p className="text-muted-foreground mb-4 line-clamp-2 flex-1">
                            {article.excerpt}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {article.tags.slice(0, 3).map(tag => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs cursor-pointer hover:bg-secondary"
                                onClick={() => toggleTag(tag)}
                              >
                                #{tag}
                              </Badge>
                            ))}
                          </div>

                          {/* Meta */}
                          <div className="flex items-center justify-between pt-4 border-t border-border/30">
                            <Link
                              to={`/author/${article.author.id}`}
                              className="flex items-center gap-3 group/author"
                            >
                              <img
                                src={article.author.avatar}
                                alt={article.author.name}
                                className="w-10 h-10 rounded-full object-cover"
                              />
                              <div>
                                <p className="font-medium text-foreground group-hover/author:text-primary transition-colors">
                                  {article.author.name}
                                </p>
                                <p className="text-sm text-muted-foreground">{article.date}</p>
                              </div>
                            </Link>

                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {article.readTime}
                              </span>
                              <span className="flex items-center gap-1">
                                <Eye className="w-4 h-4" />
                                {(article.views / 1000).toFixed(1)}k
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <BookOpen className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    No articles found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters or search query
                  </p>
                  <Button onClick={clearFilters} className="bg-primary text-primary-foreground">
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArticlesListing;
