import { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-16 md:py-20 px-6 lg:px-12 bg-primary">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Content */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <Mail size={20} className="text-primary-foreground/80" />
              <span className="text-sm uppercase tracking-widest text-primary-foreground/70">
                Newsletter
              </span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-primary-foreground mb-2">
              Stay Enlightened
            </h2>
            <p className="text-primary-foreground/70">
              Weekly insights delivered to your inbox.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full md:w-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 min-w-0 sm:min-w-[280px] px-5 py-3 bg-primary-foreground text-foreground placeholder:text-muted-foreground rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 transition-all duration-200"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ink text-primary-foreground font-medium rounded-sm hover:bg-ink/90 transition-colors duration-200"
              >
                Subscribe
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
