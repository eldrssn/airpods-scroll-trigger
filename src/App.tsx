import { useEffect } from 'react';

import { ProductsList } from './components/products-list';
import { Header } from './components/header';
import { HeroAirpods } from './components/hero-airpods';
import { HeroAirpodsMax } from './components/hero-airpods-max';

function App() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll' as any))
        .default;
      new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroAirpods />
        <HeroAirpodsMax />
        <ProductsList />
      </main>
    </>
  );
}

export default App;
