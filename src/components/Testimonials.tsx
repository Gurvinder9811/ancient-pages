import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "The Scholarly has become my daily companion for intellectual nourishment. The quality of writing and depth of research is unparalleled.",
    author: "Prof. William Sterling",
    role: "Chair of Philosophy, Cambridge University"
  },
  {
    id: 2,
    quote: "In an age of fleeting content, this publication stands as a beacon of thoughtful, enduring scholarship.",
    author: "Dr. Helena Markova",
    role: "Literary Critic & Author"
  },
  {
    id: 3,
    quote: "Each article feels like a conversation with a brilliant mind. This is what intellectual discourse should be.",
    author: "Jonathan Pierce",
    role: "Editor, The Atlantic Review"
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding px-6 lg:px-12 bg-parchment-dark/20 parchment-texture">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="ornament-divider">
            <Quote size={24} className="text-primary/50" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-ink mb-4">
            What Readers Say
          </h2>
        </div>

        {/* Testimonials */}
        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <blockquote 
              key={testimonial.id}
              className="text-center"
            >
              <p className="font-serif text-xl md:text-2xl lg:text-3xl text-ink leading-relaxed italic mb-8">
                "{testimonial.quote}"
              </p>
              <footer>
                <cite className="not-italic">
                  <span className="block font-medium text-foreground text-lg">
                    {testimonial.author}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </span>
                </cite>
              </footer>
              {index < testimonials.length - 1 && (
                <div className="ornament-divider mt-16">
                  <span className="text-2xl text-muted-foreground/30">✦</span>
                </div>
              )}
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
