import React from 'react';

import Contacts from './contacts';

const Home = ()=>{

    return(
    <div className="home_container">
        <img src="/assets/logo.png" alt="Logo"></img>
        <h1>Contacts</h1>
        <div className="contacts_list_container">
            <Contacts></Contacts>
        </div>    
    </div>
    )

}

export default Home