import React from 'react';

import Contact from './contact';

const Contacts = ({contacts,fetchContacts})=>{
    return(<React.Fragment>
        {contacts.map((contact)=>(
            <Contact key={contact.id} fetchContacts={fetchContacts} id={contact.id} fullname={contact.fullname} email={contact.email} phonenumber={contact.phonenumber} status={contact.status}></Contact>
        ))}
    </React.Fragment> 
    )

}

export default Contacts