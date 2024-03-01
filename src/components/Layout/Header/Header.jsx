import React, {useContext, useState, useEffect} from 'react';
import styles from './Header.module.scss';
import Button from "../../UI/Button/Button";
import CartContext from "../../../store/CartContext";

const Header = (props) => {
  const cartContext = useContext(CartContext);
  const [isBtnAnimated, setIsBtnAnimated] = useState(false);
  const totalNumber = cartContext.items.reduce((total, item) => total + item.amount, 0);
  const btnClasses = `btn--cart ${isBtnAnimated ? 'btn--bump' : ''}`;

  useEffect(() => {
    if (cartContext.items.length === 0) return;
    setIsBtnAnimated(true);

    const timer = setTimeout(() => {
      setIsBtnAnimated(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [cartContext.items]);
  

  return (
      <header className={styles.header}>
        <div className="container">
          <div className={styles.header__inner}>
            <h1 className={styles.header__logo}>Япона Кухня</h1>
            <Button type='button' className={btnClasses} text='Кошик' cart total={totalNumber} onClick={() => props.onShowCart(true)}/>
          </div>
        </div>
      </header>
  );
};

export default Header;
