import { FC } from 'react';
import styles from './styles.module.scss';

interface INavItem {
  imgSrc?: string;
  title?: string;
  href?: string;
}

export const NavItem: FC<INavItem> = ({ imgSrc, title, href }) => (
  <li className={styles.navItem}>
    <a href={href}>
      <img src={imgSrc} />
      <span>{title}</span>
    </a>
  </li>
);
