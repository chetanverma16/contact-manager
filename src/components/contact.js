import React from 'react';
import {useHistory} from 'react-router-dom';
import {API,graphqlOperation} from 'aws-amplify';
import {deleteContacts} from '../graphql/mutations'


const Contact = ({id,fetchContacts,fullname, email, phonenumber,status})=>{
    const history = useHistory();

    const deleteNote = async()=>{
        const payload={id:id}
        const {data} = await API.graphql(graphqlOperation(deleteContacts,{input:payload}))
        console.log("successfully Deleted",data)
        history.push('/')
        fetchContacts()
    }
    

    return (
      <div className="contact_container">
        <div className="name"> {fullname} </div>
        <div className="sub_info">
          {email} | {phonenumber} <br></br>
          active:{status ? " True" : " False"}
        </div>
        <div classname="actions_container">
          <button onClick={deleteNote}>Delete</button>
        </div>
      </div>
    );
} 

export default Contact