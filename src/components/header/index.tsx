import { NavList } from '../nav-list';
import { NavSublist } from '../nav-sublist';

import styles from './styles.module.scss';

export const Header = () => (
    <header className={styles.header}>
      <NavList />
      <NavSublist />
    </header>
  );

