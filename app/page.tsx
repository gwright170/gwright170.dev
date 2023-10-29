import { ArticlesCardsGrid } from '../components/ArticlesCardsGrid/ArticlesCardsGrid';
import { Career } from '../components/Career/Career';
import { Header } from '../components/Header/Header';
import { HeroMe } from '../components/HeroMe/HeroMe';
import { Images } from '../components/Images/Images';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroMe />
      <Images />
      <Career />
      <ArticlesCardsGrid />
    </>
  );
};

export default HomePage;
