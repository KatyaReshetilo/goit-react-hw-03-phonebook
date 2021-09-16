import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Section from './components/section/section';
import Form from './components/form/form';
import Contacts from './components/contacts/contacts';
import Filter from './components/filter/filter';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  addContact = ({ name, number }) => {
    const contactItem = {
      id: uuidv4(),
      name,
      number,
    };
    const contactsNames = this.state.contacts.map(contact => contact.name);
    if (contactsNames.includes(name)) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contactItem, ...contacts],
      }));
    }
  };

  doFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalize = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalize),
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.doFilter} />
          <Contacts
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
