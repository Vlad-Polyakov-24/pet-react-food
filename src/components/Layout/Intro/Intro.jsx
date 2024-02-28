import React from 'react';
import styles from './Intro.module.scss';
import introImg from '../../../assets/images/intro/intro.jpg';

const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className="container">
        <div className={styles.intro__img}>
          <picture>
            <img src={`${introImg}`} alt="image"/>
          </picture>
        </div>
        <div className={styles.intro__inner}>
          <h2 className={styles.intro__title}>Онлайн Суші Ресторан Япона Кухня</h2>
          <p>
            Япона Кухня - це онлайн суші-ресторан, в якому улюблені суші та сашимі, роли та інші страви національної японської кухні робить команда професійні кухарі.
          </p>
          <p>
            Швидка робота та якісна продукція, а також справжнісінькі компоненти надають гарного смаку стравам, дарують насолоду від трапези.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
