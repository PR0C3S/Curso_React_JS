import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {

   
    
    const defaultContact = new Contact("John","Pena","hola@example.com",false);
    return (
        <div>
            <div>
               <h1> Your Contact:</h1>
            <ContactComponent contacto={defaultContact}></ContactComponent>
            </div>
        </div>
    );
};


export default ContactListComponent;
