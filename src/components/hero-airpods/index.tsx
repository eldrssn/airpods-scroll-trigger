import { HeroWrapper } from '../hero-wrapper';
import styles from './styles.module.scss';

export const HeroAirpods = () => (
  <HeroWrapper
    airpodsClassName={styles.airpods}
    end="2000px bottom"
    images={['images/airpod-left.png', 'images/airpod-right.png']}
    heading="AirPods"
    info="3rd generation"
    price="From ₹19900.00*"
    headingTextClassName={styles.headingText}
  />
);
