import React,{useState,useEffect} from 'react';

import image from '../assets/Logo.png'
import Contacts from './contacts';
import {Link} from 'react-router-dom'


import {API,graphqlOperation} from 'aws-amplify'

// GraphqQL

import {listContacts} from '../graphql/queries'


const Home = ()=>{

    const [contacts,setContacts] = useState([])

    const fetchContacts = async() =>{
        const {data} = await API.graphql(graphqlOperation(listContacts))
        setContacts(data.listContactss.items)
        console.log(data)
    } 

    useEffect(()=>{
        fetchContacts();
    },[])

    return(
    <div className="home_container">
        <img src={image} alt="Logo"></img>
        <h1>Contacts</h1>
        <button className="add_button"><Link className="link" to="/add">Add Contact</Link></button>

        {/* <h2><Link to="add">Add Contact</Link></h2> */}
        <div className="contacts_list_container">
            <Contacts fetchContacts ={fetchContacts} contacts={contacts}></Contacts>
        </div>    
    </div>
    )

}

export default Home