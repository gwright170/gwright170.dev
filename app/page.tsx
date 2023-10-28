import { Header } from '@/components/Header/Header';
import { HeroMe } from '@/components/HeroMe/HeroMe';
import { ArticlesCardsGrid } from '@/components/ArticlesCardsGrid/ArticlesCardsGrid';

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroMe />
      {/* <Images /> */}
      <ArticlesCardsGrid />
    </>
  );
}
