import { NavItem } from '../nav-item';
import styles from './styles.module.scss';

const navLinks = [
  {
    title: 'Store',
    href: '#',
  },
  {
    title: 'Mac',
    href: '#',
  },
  {
    title: 'iPad',
    href: '#',
  },
  {
    title: 'iPhone',
    href: '#',
  },
  {
    title: 'Watch',
    href: '#',
  },
  {
    title: 'AirPods',
    href: '#',
  },
  {
    title: 'TV & Home',
    href: '#',
  },
  {
    title: 'Entertainment',
    href: '#',
  },
  {
    title: 'Accessories',
    href: '#',
  },
  {
    title: 'Support',
    href: '#',
  },
];

export const NavList = () => (
  <nav>
    <ul className={styles.navList}>
      <NavItem imgSrc="images/apple-icon.svg" />
      <div className={styles.bar}>
        {navLinks.map((link) => (
          <NavItem key={link.title} title={link.title} />
        ))}
      </div>
      <div className={styles.barMain}>
        <NavItem imgSrc="images/search.svg" />
        <NavItem imgSrc="images/cart.svg" />
      </div>
    </ul>
  </nav>
);
