import { HeroWrapper } from '../hero-wrapper';
import styles from './styles.module.scss';

export const HeroAirpodsMax = () => (
  <HeroWrapper
    end="+=4000 bottom'"
    images={['images/airpods-max.png']}
    heading="AirPods Max"
    price="₹59900.00*"
    startScrollBefore="-=300 top"
    headingTextClassName={styles.headingText}
    airpodsClassName={styles.airpods}
    yAirpodsTo={-900}
    actionsClassName={styles.actions}
  />
);
