import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import styles from './styles.module.scss';

const products = [
  {
    title: 'AirPods',
    description: '2nd generation',
    price: '₹14900.00*',
    img: 'images/figure-image-airpods-2nd-gen.png',
  },
  {
    title: 'AirPods',
    description: '3nd generation',
    price: 'From ₹19900.00*',
    img: 'images/figure-image-airpods-3rd-gen.png',
  },
  {
    title: 'AirPods Pro',
    description: '2nd generation',
    price: '₹26900.00*',
    img: 'images/figure-image-airpods-pro.png',
  },
  {
    title: 'AirPods Max',
    description: '',
    price: '₹59900.00*',
    img: 'images/figure-image-airpods-max.png',
  },
];

export const ProductsList = () => {
  const listRef = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            scrub: true,
            trigger: listRef.current,
            start: '-=300 top',
            end: '70% 80%',
          },
        })
        .from(listRef.current, {
          y: -100,
          scale: 0.8,
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={listRef}>
      <h2 className={styles.heading}>
        Which AirPods are <br />
        right for you?
      </h2>

      <ul className={styles.list}>
        {products.map((item, i) => (
          <li key={i} className={styles.item}>
            <img src={item.img} alt={item.title} />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.price}>{item.price}</p>

            <div className={styles.actions}>
              <a href="#" className={styles.buy}>
                Buy
              </a>
              <a href="#" className={styles.about}>
                Learn more
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
