import Brands from '@/components/modules/home/Brands';
import Category from '@/components/modules/home/Category';
import FeaturedProducts from '@/components/modules/home/FeaturedProducts';
import HeroSection from '@/components/modules/home/HeroSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Category />
      <FeaturedProducts />
      <Brands />
    </div>
  );
};

export default HomePage;
