import React, {useState} from 'react';
import { Route, Link } from 'react-router-dom';

import PizzaForm from './Components/PizzaForm';
import './App.css'

import axios from 'axios';

import * as yup from 'yup';
import schema from './Validation/formSchema'


const initialValues = {
    name: '',
    size: '',
    pepperoni: false,
    onion: false,
    pineapple: false,
    mushroom: false,
    anchovies: false,
    specialInstructions: '',
};

const initialErrors = {
  name: '',
  size: '',
  toppings: '',
  specialInstructions: '',
}

export default function App() {
  const [formValues, setFormValues] = useState([initialValues]);
  const [pizza, setPizza ] = useState([]);
    const [errors, setErrors] = useState(initialErrors);

const postPizza = newPizza => {
  axios.post(`https://reqres.in/api/orders`, newPizza)
  .then(res => {
    setPizza([...pizza, res.data])
    setFormValues(initialValues);
  }).catch((err) => console.error(err))
}

    const validate = (name, value) => {
      yup.reach(schema, name)
      .validate(value)
      .then(() => setErrors({...errors, [name]: ''}))
      .catch((err) => setErrors({...errors, [name]: err.errors[0]}))
    }

    const inputChange = (name, value) => {
      validate(name, value);
      setFormValues({
        ...formValues,
        [name]: value
      })
    }

    const formSubmit = () => {
      const newPizza = {
        name: formValues.name.trim(),
        size: formValues.size.trim(),
        toppings: ['pepperoni', 'onion','pineapple','mushroom', 'anchovies'].filter(topping => formValues[topping]),
        specialInstructions: formValues.specialInstructions.trim()
      }
      postPizza(newPizza)
    }

    return (
        <>
            <header>
                <Link to='/'>
                    <h1>BloomTech/Lambda Eats</h1>
                </Link>
            </header>
            <Route exact path='/'>
                <Link to='/pizza' id='order-pizza'>
                    Order Pizza
                </Link>
            </Route>
            <Route path='/pizza'>
                <PizzaForm
                    values={formValues}
                    change={inputChange}
                    errors={errors}
                    submit={formSubmit}
                />
            </Route>
        </>
    );
};