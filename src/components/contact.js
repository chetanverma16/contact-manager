import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import {API,graphqlOperation} from 'aws-amplify';
import {deleteContacts} from '../graphql/mutations'

import EditContact from './editContact';


const Contact = ({id,fetchContacts,fullname, email, phonenumber,status})=>{
    const history = useHistory();

    const [isEditing,setIsEditing] = useState(false)

    const deleteNote = async()=>{
        const payload={id:id}
        const {data} = await API.graphql(graphqlOperation(deleteContacts,{input:payload}))
        console.log("successfully Deleted",data)
        history.push('/')
        fetchContacts();
    }


    function ContactDisplay() {
      return(
      <div className="contact_container">
          <div className="name"> {fullname} </div>
          <div className="sub_info">
            {email} | {phonenumber} <br></br>
            active:{status ? " True" : " False"}
          </div>
          <div classname="actions_container">
            <button onClick={deleteNote}>Delete</button>
            <button onClick={()=> setIsEditing(!isEditing)}>Edit</button>
          </div>
      </div>
      )
    }

    function ContactEdit(){
      return(
      <div className="edit_form">
          <EditContact setIsEditing={setIsEditing} fetchContacts={fetchContacts} id={id} fullname={fullname} email={email} phonenumber={phonenumber} status={status}></EditContact>
      </div>
      )
    }
    return(
      <div>
        {isEditing ? ContactEdit() : ContactDisplay()}
      </div>
    )
} 

export default Contact