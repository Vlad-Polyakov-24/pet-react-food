import React, {useState} from 'react';
import styles from "./Cart.module.scss";
import Button from "../UI/Button/Button";
import Form from "../UI/Form/Form";
import Input from "../UI/Input/Input";

const CartForm = (props) => {
  const [validation, setValidation] = useState({
    inputs: {
      name: {
        value: '',
        valid: false,
        touched: false,
      },
      city: {
        value: '',
        valid: false,
        touched: false,
      },
      phone: {
        value: '',
        valid: false,
        touched: false,
      },
    },
    form: false,
  });

  const inputClasses = id => !validation.inputs[id].valid && validation.inputs[id].touched ? 'invalid' : '';

  const resetValidation = () => setValidation({
    inputs: {
      name: {
        value: '',
        valid: false,
        touched: false,
      },
      city: {
        value: '',
        valid: false,
        touched: false,
      },
      phone: {
        value: '',
        valid: false,
        touched: false,
      },
    },
    form: false,
  });

  const onChangeHandler = e => {
    const target = e.target;

    setValidation(prevState => {
      const newState = JSON.parse(JSON.stringify(prevState));
      const validArr = [];
      newState.inputs[`${target.id}`].value = target.value;
      newState.inputs[`${target.id}`].valid = target.value.trim() !== '';
      newState.inputs[`${target.id}`].touched = true;

      if (e.target.id === 'phone') {
        newState.inputs[`${target.id}`].valid = target.value.trim() !== '' && target.value.includes('0');
      }

      for (const key in newState['inputs']) {
        validArr.push(newState['inputs'][key]);
      }

      newState.form = !!validArr.every(field => field.valid === true);

      return newState;
    });
  };

  const onBlurHandler = e => {
    const target = e.target;

    setValidation(prevState => {
      const newState = JSON.parse(JSON.stringify(prevState));
      newState.inputs[`${target.id}`].touched = true;
      return newState;
    });
  };

  const setError = (...ids) => {
    ids.forEach(id => {
      if (validation.inputs[`${id}`].touched === false && validation.inputs[`${id}`].value === '') {
        setValidation(prevState => {
          const newState = JSON.parse(JSON.stringify(prevState));
          newState.inputs[`${id}`].touched = true;

          return {
            ...newState,
          }
        })
      }
    });
  };

  const submit = e => {
    e.preventDefault();

    if (validation.form === false) {
      setError('name', 'city', 'phone');
      return;
    }

    const data = {
      name: validation.inputs.name.value,
      city: validation.inputs.city.value,
      phone: validation.inputs.phone.value,
    };

    props.onSubmit(data);

    resetValidation();
  };

  return (
    <Form className='form--cart' onSubmit={submit}>
      <Input
        type='text'
        desc="Ім'я"
        id='name'
        name='name'
        size='full'
        value={validation.inputs.name.value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        className={inputClasses('name')}
      >
        {!validation.inputs.name.valid && validation.inputs.name.touched && <p className='error-message error-message--absolute'>Введіть ім'я!</p>}
      </Input>
      <Input
        type='text'
        desc="Місто"
        id='city'
        name='city'
        size='full'
        value={validation.inputs.city.value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        className={inputClasses('city')}
      >
        {!validation.inputs.city.valid && validation.inputs.city.touched && <p className='error-message error-message--absolute'>Введіть Ваше місто!</p>}
      </Input>
      <Input
        type='tel'
        desc="Телефон"
        id='phone'
        name='phone'
        size='full'
        value={validation.inputs.phone.value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        className={inputClasses('phone')}
      >
        {!validation.inputs.phone.valid && validation.inputs.phone.touched && <p className='error-message error-message--absolute'>Введіть номер телефону!</p>}
      </Input>
      <div className={styles.cart__buttons}>
        <Button
          type='button'
          text='Зачинити'
          className='btn--outline'
          onClick={() => props.onHideCart(false)}>
        </Button>
        <Button
          disabled={!validation.form}
          type='submit'
          text='Замовити'>
        </Button>
      </div>
    </Form>
  );
};

export default CartForm;
