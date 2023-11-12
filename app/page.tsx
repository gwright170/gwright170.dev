import { Container } from '@mantine/core';
import { Career } from '../components/Career/Career';
import { Expertise } from '../components/Expertise/Expertise';
import { Header } from '../components/Header/Header';
import { HeroMe } from '../components/HeroMe/HeroMe';

const HomePage = () => {
  return (
    <Container
      fluid
      styles={{
        root: { padding: 0 },
      }}
    >
      <Header />
      <Container
        my="md"
        styles={{
          // nasty hack to override injected mt + mb from Container that we do not want
          root: { margin: '0 auto !important' },
        }}
      >
        <HeroMe />
        <Expertise />
        <Career />
      </Container>
    </Container>
  );
};

export default HomePage;
