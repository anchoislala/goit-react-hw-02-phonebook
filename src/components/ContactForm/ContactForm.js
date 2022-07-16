import { Formik } from 'formik';
import * as yup from 'yup';
import { AddButton, Label, InfoInput, InfoForm, ErrorInfo } from "./ContactForm.styled";
import PropTypes from 'prop-types';

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required(),
})

const initialValues = {
    name: '',
    number: '',
}

const ContactForm = ({ onSubmit }) => {

    const handleSubmit = (values, {resetForm}) => {

        onSubmit(values);
        resetForm();
    };

        return (
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                <InfoForm autoComplete="off">
                    <Label htmlFor='name'>Name
                        <InfoInput type="text" name="name"/>
                        <ErrorInfo name="name" component='div'/>
                    </Label>

                    <Label htmlFor='number'>Number
                        <InfoInput type="tel" name="number"/>
                        <ErrorInfo name="number" component='div'/>
                    </Label>

                    <AddButton type="submit">Add contact</AddButton>
                </InfoForm>
            </Formik>
        );
    };

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;



//---------------------Simple ContactForm-------------------------------------
// import { Component } from "react";
// import shortid from "shortid";

// class ContactForm extends Component {

//     state = {
//         name: '',
//         number: '',
//     };

//     nameInputId = shortid.generate();
//     numberInputId = shortid.generate();

//     handleInputChange = event => {
//         const { name, value } = event.currentTarget;

//         this.setState({ [name]: value });
//     };

//     handleSubmit = event => {
//         event.preventDefault();

//         this.props.onSubmit(this.state);
//         this.reset();
//     };

//     reset = () => {
//         this.setState({ name: '', number: '' })
//     }

//     render() {

//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label htmlFor={this.nameInputId}>Name
//                     <input
//                         type="text"
//                         name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                         value={this.state.name}
//                         onChange={this.handleInputChange}
//                         id={this.nameInputId}
//                     />
//                 </label>

//                 <label htmlFor={this.numberInputId}>Number
//                     <input
//                         type="tel"
//                         name="number"
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         required
//                         value={this.state.number}
//                         onChange={this.handleInputChange}
//                         id={this.numberInputId}
//                     />
//                 </label>

//                 <button type="submit">Add contact</button>
//             </form>
//         );
//     };
// };