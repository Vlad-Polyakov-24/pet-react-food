import React from 'react';
import styles from './Header.module.scss';
import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.header__inner}>
            <h1 className={styles.header__logo}>Япона Кухня</h1>
            <Button type='button' className='btn--cart' text='Кошик' cart count/>
          </div>
        </div>
      </header>
      {/*<Modal/>*/}
    </>
  );
};

export default Header;
