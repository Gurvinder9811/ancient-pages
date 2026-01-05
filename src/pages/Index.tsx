import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LatestArticles from '@/components/LatestArticles';
import TrendingTopics from '@/components/TrendingTopics';
import MostViewedAuthors from '@/components/MostViewedAuthors';
import Testimonials from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LatestArticles />
        <TrendingTopics />
        <MostViewedAuthors />
        <Testimonials />
        <FAQSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
