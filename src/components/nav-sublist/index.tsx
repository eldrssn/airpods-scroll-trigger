import styles from './styles.module.scss';

const products = [
  {
    title: `AirPods
  2nd Generation`,
    icon: 'images/airpods-2.svg',
  },
  {
    title: `AirPods
  3rd Generation`,
    icon: 'images/airpods-3.svg',
  },
  {
    title: `AirPods Pro
  2nd Generation`,
    icon: 'images/airpods-pro.svg',
  },
  { title: `AirPods Max`, icon: 'images/airpods-max.svg' },
  { title: `Compare`, icon: 'images/airpods-compare.svg' },
  { title: `Apple Music`, icon: 'images/apple-music.svg' },
];

export const NavSublist = () => (
  <ul className={styles.list}>
    {products.map((product) => (
      <li key={product.title} className={styles.item}>
        <img
          src={product.icon}
          alt={product.title}
          height="54px"
          width="34px"
        />
        <span>{product.title}</span>
      </li>
    ))}
  </ul>
);
