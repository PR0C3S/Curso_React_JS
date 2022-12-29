import React, {useState}  from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contacto }) => {
    const [status, setStatus] = useState(contacto.conectado);


    const UpdateStatus = () =>
    {
        let change = !status;
        contacto.conectado = change;
        setStatus(change);
    }
    return (
        <div>
            <h2>Nombre: { contacto.nombre }</h2>
            <h3>Apellido: { contacto.apellido }</h3>
            <h4>Email: { contacto.email }</h4>
            <h5>
                Estado: {contacto.conectado ? "Contacto En Línea":"Contacto No Disponible"}
            </h5>
            <button onClick={UpdateStatus}>Cambiar status</button>
        </div>
    );
};


ContactComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
