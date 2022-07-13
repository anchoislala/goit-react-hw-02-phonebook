import {ContactsList, ContactsItem, ContactInformation, DeleteButton} from "./ContactList.styled";
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ContactsList>
        {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
            <ContactInformation>- {name}: {number}</ContactInformation>
            <DeleteButton onClick={() => onDeleteContact(id)}>Delete</DeleteButton>
        </ContactsItem>
        ))}
</ContactsList>
);

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;