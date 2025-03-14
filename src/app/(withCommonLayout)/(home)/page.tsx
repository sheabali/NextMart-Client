import Brands from '@/components/modules/home/Brands';
import Category from '@/components/modules/home/Category';
import FeaturedProducts from '@/components/modules/home/FeaturedProducts';
import FlashSale from '@/components/modules/home/FlashSale';
import HeroSection from '@/components/modules/home/HeroSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Category />
      <FeaturedProducts />
      <FlashSale />
      <Brands />
    </div>
  );
};

export default HomePage;
