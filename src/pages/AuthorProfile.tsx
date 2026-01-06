import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  MapPin, 
  Mail, 
  Globe, 
  Twitter, 
  Linkedin, 
  BookOpen, 
  Eye, 
  Star, 
  Award,
  TrendingUp,
  Users,
  MessageSquare
} from "lucide-react";

const AuthorProfile = () => {
  const { authorId } = useParams();

  // Mock author data
  const author = {
    id: authorId,
    name: "Dr. Eleanor Whitmore",
    title: "Professor of Classical Studies",
    institution: "Oxford University",
    location: "Oxford, United Kingdom",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    banner: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&h=400&fit=crop",
    bio: "Dr. Eleanor Whitmore is a renowned scholar specializing in ancient Mediterranean cultures, with a particular focus on the intellectual traditions of classical Greece and Rome. Her work bridges the gap between historical scholarship and contemporary relevance, making ancient wisdom accessible to modern readers. With over two decades of research and teaching experience, she has authored five books and contributed to numerous academic journals.",
    experience: "20+ years",
    joinedDate: "March 2019",
    email: "eleanor.whitmore@oxford.edu",
    website: "www.eleanorwhitmore.com",
    twitter: "@DrWhitmore",
    linkedin: "eleanor-whitmore",
    stats: {
      articles: 147,
      views: "2.4M",
      followers: "45.2K",
      rating: 4.9
    },
    ranking: 3,
    expertise: [
      "Ancient Philosophy",
      "Classical Literature", 
      "Mediterranean History",
      "Stoicism",
      "Greek Mythology",
      "Roman Empire"
    ],
    achievements: [
      { title: "Top Author 2025", icon: Award },
      { title: "Most Read in History", icon: TrendingUp },
      { title: "Community Favorite", icon: Users }
    ]
  };

  const categories = [
    { name: "Ancient History", count: 45, percentage: 31 },
    { name: "Philosophy", count: 38, percentage: 26 },
    { name: "Classical Literature", count: 28, percentage: 19 },
    { name: "Archaeology", count: 21, percentage: 14 },
    { name: "Art & Culture", count: 15, percentage: 10 }
  ];

  const latestArticles = [
    {
      id: 1,
      title: "The Philosophy of Ancient Libraries and Their Modern Legacy",
      excerpt: "Exploring how the great libraries of antiquity shaped our understanding of knowledge preservation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      date: "Jan 3, 2026",
      readTime: "12 min",
      views: "24.5K"
    },
    {
      id: 2,
      title: "Stoic Wisdom for the Modern Professional",
      excerpt: "Applying Marcus Aurelius's meditations to contemporary workplace challenges.",
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=250&fit=crop",
      date: "Dec 28, 2025",
      readTime: "8 min",
      views: "18.2K"
    },
    {
      id: 3,
      title: "The Lost Scrolls of Herculaneum",
      excerpt: "New discoveries from the volcanic ruins reveal ancient secrets.",
      image: "https://images.unsplash.com/photo-1461360370896-922624d12a74?w=400&h=250&fit=crop",
      date: "Dec 20, 2025",
      readTime: "15 min",
      views: "32.1K"
    }
  ];

  const mostViewedArticles = [
    {
      id: 4,
      title: "Understanding the Oracle of Delphi",
      views: "156K",
      date: "Sep 2024"
    },
    {
      id: 5,
      title: "The Rise and Fall of the Roman Republic",
      views: "142K",
      date: "Jun 2024"
    },
    {
      id: 6,
      title: "Plato's Cave: A Modern Interpretation",
      views: "128K",
      date: "Mar 2024"
    },
    {
      id: 7,
      title: "Ancient Greek Democracy vs Modern Politics",
      views: "115K",
      date: "Jan 2024"
    },
    {
      id: 8,
      title: "The Wisdom of Seneca's Letters",
      views: "98K",
      date: "Nov 2023"
    }
  ];

  const reviews = [
    {
      id: 1,
      author: "Prof. James Hartford",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      rating: 5,
      text: "Dr. Whitmore's articles are a masterclass in making ancient history accessible and relevant. Her scholarship is impeccable, yet her writing remains engaging for general audiences.",
      date: "Dec 2025"
    },
    {
      id: 2,
      author: "Dr. Sarah Mitchell",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      rating: 5,
      text: "A true scholar who bridges the gap between academia and public understanding. Every article is thoroughly researched and beautifully written.",
      date: "Nov 2025"
    },
    {
      id: 3,
      author: "Marcus Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 4,
      text: "Insightful perspectives on classical philosophy that have genuinely changed how I approach modern challenges. Highly recommended for any curious mind.",
      date: "Oct 2025"
    }
  ];

  const tags = [
    "Aristotle", "Plato", "Seneca", "Marcus Aurelius", "Homer", 
    "Alexandria", "Athens", "Rome", "Stoicism", "Epicureanism",
    "Greek Tragedy", "Latin Literature", "Ancient Art", "Philosophy"
  ];

  return (
    <div className="min-h-screen bg-background parchment-texture">
      <Header />
      
      <main className="pt-16">
        {/* Banner Image */}
        <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
          <img 
            src={author.banner} 
            alt="Profile banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        {/* Profile Header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            {/* Avatar */}
            <div className="mx-auto md:mx-0">
              <img 
                src={author.avatar} 
                alt={author.name}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover ring-4 ring-background shadow-xl"
              />
            </div>

            {/* Author Info */}
            <div className="flex-1 text-center md:text-left pt-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                    <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                      {author.name}
                    </h1>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      #{author.ranking} Author
                    </Badge>
                  </div>
                  <p className="text-lg text-muted-foreground mb-1">{author.title}</p>
                  <p className="text-muted-foreground">{author.institution}</p>
                  <div className="flex items-center justify-center md:justify-start gap-4 mt-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {author.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Joined {author.joinedDate}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 justify-center md:justify-start">
                  <Button className="bg-primary hover:bg-primary/90">
                    <Users className="w-4 h-4 mr-2" />
                    Follow
                  </Button>
                  <Button variant="outline">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 p-4 sm:p-6 bg-card/50 rounded-xl border border-border/30">
                <div className="text-center">
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-primary">{author.stats.articles}</p>
                  <p className="text-sm text-muted-foreground">Articles</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-primary">{author.stats.views}</p>
                  <p className="text-sm text-muted-foreground">Total Views</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-primary">{author.stats.followers}</p>
                  <p className="text-sm text-muted-foreground">Followers</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-5 h-5 fill-primary text-primary" />
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-primary">{author.stats.rating}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-wrap justify-center gap-4">
            {author.achievements.map((achievement, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/20"
              >
                <achievement.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{achievement.title}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="ornament-divider max-w-4xl mx-auto"></div>

        {/* Bio & Experience */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
            About the Author
          </h2>
          <p className="text-muted-foreground leading-relaxed text-center text-lg mb-8">
            {author.bio}
          </p>
          <div className="flex justify-center">
            <Badge variant="outline" className="text-base px-4 py-2">
              <BookOpen className="w-4 h-4 mr-2" />
              {author.experience} of Experience
            </Badge>
          </div>
        </section>

        {/* Expertise & Categories */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Areas of Expertise */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-6">
                Areas of Expertise
              </h2>
              <div className="flex flex-wrap gap-2">
                {author.expertise.map((skill) => (
                  <Badge 
                    key={skill} 
                    className="bg-primary text-primary-foreground px-4 py-2 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Writing Categories */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-6">
                Writing Categories
              </h2>
              <div className="space-y-4">
                {categories.map((category) => (
                  <div key={category.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-foreground">{category.name}</span>
                      <span className="text-muted-foreground">{category.count} articles</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="ornament-divider max-w-4xl mx-auto"></div>

        {/* Latest & Most Viewed Articles */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Latest Articles */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8">
                Latest Articles
              </h2>
              <div className="space-y-6">
                {latestArticles.map((article) => (
                  <Link 
                    key={article.id} 
                    to={`/article/${article.id}`}
                    className="group flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 bg-card/30 rounded-lg border border-border/20 hover:border-border/40 hover:shadow-md transition-all"
                  >
                    <div className="sm:w-48 aspect-video sm:aspect-[4/3] rounded-md overflow-hidden flex-shrink-0">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {article.views}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline">View All Articles</Button>
              </div>
            </div>

            {/* Most Viewed */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-6">
                Most Viewed
              </h2>
              <div className="space-y-4">
                {mostViewedArticles.map((article, index) => (
                  <Link 
                    key={article.id} 
                    to={`/article/${article.id}`}
                    className="group flex gap-4 items-start"
                  >
                    <span className="font-serif text-2xl font-bold text-primary/30 w-8 flex-shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {article.views}
                        </span>
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tags */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
            Frequently Used Tags
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <Link
                key={tag}
                to={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-card/50 rounded-full border border-border/30 text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </section>

        <div className="ornament-divider max-w-4xl mx-auto"></div>

        {/* Reviews */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Reader Reviews
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(author.stats.rating) ? 'fill-primary text-primary' : 'text-muted'}`} 
                  />
                ))}
              </div>
              <span className="text-muted-foreground">
                {author.stats.rating} from 2,847 reviews
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {reviews.map((review) => (
              <div 
                key={review.id}
                className="p-6 bg-card/30 rounded-xl border border-border/20"
              >
                <div className="flex items-start gap-4">
                  <img 
                    src={review.avatar} 
                    alt={review.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h4 className="font-medium text-foreground">{review.author}</h4>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < review.rating ? 'fill-primary text-primary' : 'text-muted'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {review.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">
              <MessageSquare className="w-4 h-4 mr-2" />
              View All Reviews
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
          <div className="bg-primary/5 rounded-2xl p-8 sm:p-12 border border-primary/10 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Interested in collaborations, speaking engagements, or academic inquiries? 
              Feel free to reach out through any of the channels below.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a 
                href={`mailto:${author.email}`}
                className="flex items-center gap-2 px-5 py-3 bg-card rounded-lg border border-border/30 hover:border-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm">{author.email}</span>
              </a>
              <a 
                href={`https://${author.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-card rounded-lg border border-border/30 hover:border-primary transition-colors"
              >
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-sm">{author.website}</span>
              </a>
            </div>

            <div className="flex justify-center gap-4">
              <a 
                href={`https://twitter.com/${author.twitter.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href={`https://linkedin.com/in/${author.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AuthorProfile;
