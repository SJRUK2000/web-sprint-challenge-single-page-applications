import React from 'react'

import './Form.css'

export default function PizzaForm(props) {
  const{ values, submit, change, errors } = props

  const onSubmit = (e) => {
    e.preventDefault();
    submit()
  }

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
  }


  return (
      <form id='pizza-form'>
          <label>
              Enter Valued Customer's Name:
              <input
                  id='name-input'
                  type='text'
                  name='name'
                  value={values.name}
                  onChange={onChange}
              />
          </label>
          <div>{errors.name}</div>
          <label>
              Pick your pizza
              <select id='size-dropdown' value={values.size} name='size' onChange={onChange}>
                  <option value='default'>Size</option>
                  <option value='small'>Small</option>
                  <option value='medium'>Medium</option>
                  <option value='large'>Large</option>
              </select>
          </label>
          <div>{errors.size}</div>
              <h2>Choose your toppings</h2>
          <div className='topping-choices'>
              <label>
                  Pepperoni
                  <input
                      type='checkbox'
                      name='pepperoni'
                      checked={values.pepperoni}
                      onChange={onChange}
                      />
              </label>
              <label>
                  Onion
                  <input
                      type='checkbox'
                      name='onion'
                      checked={values.onion}
                      onChange={onChange}
                      />
              </label>
              <label>
                  Pineapple
                  <input
                      type='checkbox'
                      name='pineapple'
                      checked={values.pineapple}
                      onChange={onChange}
                      />
              </label>
              <label>
                  Mushroom
                  <input
                      type='checkbox'
                      name='mushroom'
                      checked={values.mushroom}
                      onChange={onChange}
                      />
              </label>
              <label>
                  Anchovies
                  <input
                      type='checkbox'
                      name='anchovies'
                      checked={values.anchovies}
                      onChange={onChange}
                      />
              </label>
              <div>{errors.toppings}</div>
          </div>
          <label>
              Special Instructions
              <input
                  id='special-text'
                  type='textArea'
                  name='specialInstructions'
                  value={values.specialInstructions}
                  onChange={onChange}
                  />
          </label>
          <div>{errors.specialInstructions}</div>
          <button id='order-button' onSubmit={onSubmit}>
              Order
          </button>
      </form>
  );
}