import { FC, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import styles from './styles.module.scss';

interface IHeroWrapper {
  startScrollBefore?: string;
  end: string;
  images: string[];
  heading: string;
  info?: string;
  price?: string;
  yAirpodsTo?: number;
  airpodsClassName: string;
  headingTextClassName: string;
  actionsClassName?: string;
}

export const HeroWrapper: FC<IHeroWrapper> = ({
  startScrollBefore,
  end,
  images,
  heading,
  info,
  price,
  yAirpodsTo,
  airpodsClassName,
  headingTextClassName,
  actionsClassName,
}) => {
  const wrapperRef = useRef(null);
  const airpodsRef = useRef(null);
  const contentRef = useRef(null);
  const headingRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            pin: true,
            scrub: true,
            trigger: wrapperRef.current,
            start: 'top top',
            end: end,
          },
        })
        .to(headingRef.current, {
          scale: 0.7,
        })
        .to(
          contentRef.current,
          {
            y: -10,
          },
          '<'
        )
        .to(
          airpodsRef.current,
          {
            y: yAirpodsTo || 0,
            scale: 4,
            filter: 'blur(4px)',
          },
          '<'
        );
    });

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (!startScrollBefore) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            scrub: true,
            trigger: wrapperRef.current,
            start: startScrollBefore,
            end: 'bottom bottom',
          },
        })
        .from(airpodsRef.current, {
          y: 150,
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={wrapperRef}>
      <div className={airpodsClassName} ref={airpodsRef}>
        {images &&
          images.map((src, index) => (
            <img key={index} src={src} alt={`airpod-${index + 1}`} />
          ))}
      </div>

      <div className={styles.heading} ref={contentRef}>
        <h2 className={headingTextClassName} ref={headingRef}>
          {heading}
        </h2>
        {info && <p className={styles.headingInfo}>{info}</p>}
        {price && <p className={styles.headingPrice}>{price}</p>}
      </div>

      <div className={[styles.actions, actionsClassName].join(' ')}>
        <a href="#" className={styles.buy}>
          Buy
        </a>
        <a href="#" className={styles.about}>
          Learn more
        </a>
      </div>
    </section>
  );
};
