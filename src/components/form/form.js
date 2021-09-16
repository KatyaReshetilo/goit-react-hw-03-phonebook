import React, { Component } from 'react';
import s from './form.module.css';
class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handelChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  formSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.formSubmit}>
        <label className={s.labelForm}>
          Name
          <input
            className={s.inputForm}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handelChange}
          />
        </label>
        <label className={s.labelForm}>
          Number
          <input
            className={s.inputForm}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.handelChange}
          />
        </label>
        <button className={s.buttonForm} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
