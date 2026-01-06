import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ArticleDetail = () => {
  const { slug } = useParams();

  // Mock article data - in real app, fetch based on slug
  const article = {
    title: "The Philosophy of Ancient Libraries and Their Modern Legacy",
    subtitle: "Exploring how the great libraries of antiquity shaped our understanding of knowledge preservation",
    author: {
      name: "Dr. Eleanor Whitmore",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      bio: "Professor of Classical Studies at Oxford University, specializing in ancient Mediterranean cultures.",
      articles: 47
    },
    date: "January 3, 2026",
    readTime: "12 min read",
    category: "History",
    tags: ["Ancient History", "Libraries", "Philosophy", "Knowledge"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop",
    content: `
      <p class="text-lg leading-relaxed mb-6 first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">The Library of Alexandria stands as perhaps the most famous symbol of ancient scholarship and the pursuit of knowledge. Founded in the 3rd century BCE under the reign of Ptolemy II Philadelphus, this magnificent institution represented humanity's first systematic attempt to gather all the world's knowledge in one place.</p>
      
      <p class="mb-6 leading-relaxed">What made Alexandria unique was not merely its size—though estimates suggest it held between 400,000 and 700,000 scrolls at its peak—but its ambition. The library's scholars didn't simply collect texts; they actively sought to acquire, copy, translate, and preserve every piece of written knowledge they could find.</p>
      
      <h2 class="font-serif text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">The Scholar's Paradise</h2>
      
      <p class="mb-6 leading-relaxed">The library was more than a repository; it was a living institution. Scholars from across the Mediterranean world came to study, debate, and create. The Mouseion, the research institution attached to the library, provided housing, meals, and salaries for resident scholars. This early form of academic fellowship allowed thinkers to dedicate themselves entirely to intellectual pursuits.</p>
      
      <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-lg text-muted-foreground">"The library was the brain of the ancient world, a place where knowledge from every corner of civilization converged and was distilled into wisdom."</blockquote>
      
      <p class="mb-6 leading-relaxed">Among the library's most notable achievements was the translation of the Hebrew Bible into Greek—the Septuagint—a project that would have profound implications for the spread of Judaism and later Christianity throughout the Hellenistic world.</p>
      
      <h2 class="font-serif text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">Lessons for the Modern Age</h2>
      
      <p class="mb-6 leading-relaxed">Today, as we grapple with the challenges of digital preservation and information overload, the lessons of Alexandria remain remarkably relevant. The ancient librarians understood something we are only now rediscovering: that knowledge, if not actively preserved and curated, is inherently fragile.</p>
      
      <p class="mb-6 leading-relaxed">The internet, often called our modern Library of Alexandria, faces similar challenges. Digital rot, link decay, and the ephemeral nature of online content mean that much of what we create today may be lost to future generations. Projects like the Internet Archive's Wayback Machine represent conscious efforts to combat this digital entropy.</p>
      
      <h2 class="font-serif text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">The Enduring Legacy</h2>
      
      <p class="mb-6 leading-relaxed">Perhaps the greatest legacy of the ancient libraries is not any particular text they preserved, but the idea they embodied: that human knowledge is a shared treasure, worthy of collection, organization, and protection. This vision continues to animate our greatest cultural institutions, from the British Library to the Library of Congress, from Wikipedia to open-access academic journals.</p>
      
      <p class="mb-6 leading-relaxed">As we build the information infrastructure of the 21st century, we would do well to remember the scholars of Alexandria—their ambitions, their methods, and ultimately, their fate. For the destruction of the great library, whether gradual or sudden, reminds us that even the greatest repositories of knowledge are not permanent unless we make them so.</p>
    `
  };

  const relatedArticles = [
    {
      id: 1,
      title: "The Lost Scrolls of Herculaneum",
      excerpt: "Volcanic ash preserved thousands of ancient texts...",
      image: "https://images.unsplash.com/photo-1461360370896-922624d12a74?w=400&h=250&fit=crop",
      author: "Prof. Marcus Chen",
      readTime: "8 min"
    },
    {
      id: 2,
      title: "Medieval Monasteries as Knowledge Keepers",
      excerpt: "How monks preserved classical learning through the Dark Ages...",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=250&fit=crop",
      author: "Dr. Sarah Mitchell",
      readTime: "10 min"
    },
    {
      id: 3,
      title: "The Digital Library Revolution",
      excerpt: "From papyrus to pixels: the evolution of knowledge storage...",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
      author: "James Anderson",
      readTime: "6 min"
    }
  ];

  const relatedCategories = [
    { name: "Ancient History", count: 156 },
    { name: "Philosophy", count: 89 },
    { name: "Literature", count: 234 },
    { name: "Archaeology", count: 67 },
    { name: "Classical Studies", count: 112 }
  ];

  return (
    <div className="min-h-screen bg-background parchment-texture">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb & Back */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Back to Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
              {article.category}
            </Badge>
            {article.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-muted-foreground">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
            {article.title}
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
            {article.subtitle}
          </p>

          {/* Author & Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-border/50">
            <div className="flex items-center gap-4">
              <img 
                src={article.author.avatar} 
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
              />
              <div>
                <p className="font-medium text-foreground">{article.author.name}</p>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Bookmark className="w-4 h-4" />
                <span className="hidden sm:inline">Save</span>
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Share</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="aspect-[2/1] rounded-lg overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div 
            className="prose prose-lg max-w-none text-foreground/90"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-3">Tagged in:</p>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="outline" 
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </article>

        {/* Author Box */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-card/50 rounded-xl p-6 sm:p-8 border border-border/30">
            <div className="flex flex-col sm:flex-row gap-6">
              <img 
                src={article.author.avatar} 
                alt={article.author.name}
                className="w-20 h-20 rounded-full object-cover ring-2 ring-primary/20 mx-auto sm:mx-0"
              />
              <div className="text-center sm:text-left">
                <p className="text-sm text-primary font-medium mb-1">Written by</p>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  {article.author.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.author.bio}
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-4">
                  <span className="text-sm text-muted-foreground">
                    <User className="w-4 h-4 inline mr-1" />
                    {article.author.articles} articles
                  </span>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Follow Author
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ornament Divider */}
        <div className="ornament-divider max-w-3xl mx-auto mb-16"></div>

        {/* Related Articles */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
            Related Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {relatedArticles.map((item) => (
              <Link 
                key={item.id} 
                to={`/article/${item.id}`}
                className="group"
              >
                <article className="bg-card/30 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-border/20 hover:border-border/40">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{item.author}</span>
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Related Categories */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
            Explore Related Categories
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {relatedCategories.map((category) => (
              <Link
                key={category.name}
                to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group px-5 py-3 bg-card/50 rounded-full border border-border/30 hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </span>
                <span className="ml-2 text-sm text-muted-foreground">
                  ({category.count})
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetail;
