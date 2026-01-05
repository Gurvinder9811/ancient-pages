interface Topic {
  id: number;
  name: string;
  articleCount: number;
  image: string;
}

const topics: Topic[] = [
  {
    id: 1,
    name: "Philosophy",
    articleCount: 124,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Ancient History",
    articleCount: 98,
    image: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Classical Literature",
    articleCount: 86,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Art & Architecture",
    articleCount: 72,
    image: "https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Science & Discovery",
    articleCount: 65,
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Political Thought",
    articleCount: 54,
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop"
  },
];

const TrendingTopics = () => {
  return (
    <section id="topics" className="section-padding px-6 lg:px-12 bg-parchment-dark/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-ink mb-4">
            Trending Topics to Explore
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Delve into the subjects that are captivating readers this month.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {topics.map((topic) => (
            <a
              key={topic.id}
              href={`#topic-${topic.id}`}
              className="group relative overflow-hidden rounded-sm aspect-[4/3] cursor-pointer hover-lift"
            >
              {/* Background Image */}
              <img
                src={topic.image}
                alt={topic.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-medium text-primary-foreground mb-1">
                  {topic.name}
                </h3>
                <p className="text-primary-foreground/70 text-sm">
                  {topic.articleCount} Articles
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics;
